"use client";

import { createSteroidsIndex, searchSteroidsIndex } from "@/lib/search";
import { useEffect, useState } from "react";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("m");
  const [searchState, setSearchState] = useState<"loading" | "ready">(
    "loading"
  );
  const [results, setResults] = useState<
    ReturnType<typeof searchSteroidsIndex>
  >([]);
  const router = useRouter();

  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getSteroids = async () => {
      const steroids = await fetch("/api/search").then((res) => res.json());

      createSteroidsIndex(steroids);

      setSearchState("ready");
    };

    getSteroids();
  }, []);

  useEffect(() => {
    if (searchState !== "ready") return;

    const results = searchSteroidsIndex(searchQuery);

    console.log(results);

    setResults(results);
  }, [searchState, searchQuery]);

  const resultsByCategory = results.reduce((acc, result) => {
    const category = result.category?.name || "Others";

    if (!acc[category]) {
      acc[category] = [];
    }

    acc[category].push(result);

    return acc;
  }, {} as Record<string, typeof results>);

  console.log(resultsByCategory);

  return (
    <Dialog open={modalOpen} onOpenChange={setModalOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon">
          <SearchIcon />
        </Button>
      </DialogTrigger>
      <DialogContent className="h-96 flex flex-col">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <Command shouldFilter={false} className="mb-auto">
          <CommandInput
            value={searchQuery}
            onValueChange={setSearchQuery}
            placeholder="Search for steroids..."
          />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>

            {Object.entries(resultsByCategory).map(([category, results]) => (
              <CommandGroup key={category} heading={category}>
                {results.map((result) => (
                  <CommandItem
                    key={result.id}
                    onSelect={() => {
                      setModalOpen(false);
                      router.push(
                        `/steroids/${result.category?.slug}/${result.id}`
                      );
                    }}
                    value={result.id}
                    className="flex justify-between items-center"
                  >
                    <div className="flex flex-col">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: result.name,
                        }}
                      />
                      <div
                        className="text-sm text-gray-500"
                        dangerouslySetInnerHTML={{
                          __html: result.description.join("..."),
                        }}
                      />
                    </div>
                    <span>{result.price} €</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            ))}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  );
};

export default Search;
