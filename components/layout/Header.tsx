import Image from "next/image";
import { Button } from "../ui/button";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { config } from "@/lib/config";

const Header = () => {
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
            <Link href="/profile">
              <UserIcon />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
