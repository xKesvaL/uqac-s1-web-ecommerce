import Image from "next/image";
import { Button } from "../ui/button";
import { LogInIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { config } from "@/lib/config";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Search from "./Search";

const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  return (
    <header className="px-12 py-8 shadow border-b-[1px] border-muted sticky top-0 h-32 bg-background z-50">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo/logo_white_no-reflect.png"
            width={190}
            height={66.8}
            alt={`${config.appName} logo`}
          />
        </Link>

        <div className="flex gap-8 items-center">
          <Link href="/steroids">All Steroids</Link>
          <Link href="/steroids/oral-steroids">Oral Steroids</Link>
          <Link href="/steroids/injectable-steroids">Injectable Steroids</Link>
          <Link href="/steroids/sarms">SARMs</Link>
          <DropdownMenu>
            <DropdownMenuTrigger>Others</DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuLabel>Other Steroids</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/steroids/cycle-support">Cycle Support</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/steroids/human-growth-hormone">
                  Human Growth Hormone
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/steroids/peptides">Peptides</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/steroids/insulins-biguanides">
                  Insulins & Biguanides
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/steroids/pre-designed-stacks">
                  Pre-designed Stacks
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex items-center">
          <Search />
          <Button variant="ghost" size="icon" asChild>
            {session ? (
              <Link href="/profile">
                <UserIcon />
              </Link>
            ) : (
              <Link href="/auth/login">
                <LogInIcon />
              </Link>
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
