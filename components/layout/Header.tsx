import Image from "next/image";
import { Button } from "../ui/button";
import { LogInIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { config } from "@/lib/config";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  return (
    <header className="px-12 py-8 shadow border-b-[1px] border-muted sticky top-0 h-32">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image
            src="/logo/logo_white_no-reflect.png"
            width={190}
            height={66.8}
            alt={`${config.appName} logo`}
          />
        </Link>

        <div className="flex gap-4 items-center">test</div>
        <div className="flex gap-4 items-center">
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
