"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const SteroidFilter = ({ resultsCount }: { resultsCount: number }) => {
  const [scrollY, setScrollY] = useState(0);
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleValueChange = (value: string) => {
    // reflect the change in the URL query params
    const url = new URL(window.location.href);
    url.searchParams.set("sort", value);
    router.push(url.toString());
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="sticky top-20 lg:top-32 bg-background/80 backdrop-blur-lg rounded-b-xl">
      <div
        className="py-4 flex items-center justify-between transition-all"
        style={{
          paddingInline: scrollY > 80 ? "1rem" : "0rem",
        }}
      >
        <div className="flex items-center gap-4">
          <Select
            onValueChange={handleValueChange}
            defaultValue={searchParams.get("sort") || undefined}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price-asc">Price low to high</SelectItem>
              <SelectItem value="price-desc">Price high to low</SelectItem>
              <SelectItem value="name-asc">Name A -&gt; Z</SelectItem>
              <SelectItem value="name-desc">Name Z -&gt; A</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="text-muted-foreground">{resultsCount} results</div>
      </div>
    </div>
  );
};

export default SteroidFilter;
