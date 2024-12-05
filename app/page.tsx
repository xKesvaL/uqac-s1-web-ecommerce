import SteroidCard from "@/components/steroids/SteroidCard";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const popularSteroids = await prisma.steroid.findMany({
    take: 8,
    include: {
      Category: true,
    },
  });

  return (
    <div className="py-12 flex flex-col gap-12">
      <header className="">
        <div className="flex flex-col gap-2">
          <h1 className="text-6xl font-light">Welcome to SupaSteroids</h1>
          <p className="text-foreground/80">
            We are the best online store for all your steroids needs. We have
            the best prices and the best quality.
          </p>
        </div>
      </header>
      <div className="flex flex-col gap-4">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl">Best sellers</h2>
          <Button asChild>
            <Link href="/steroids">
              More Steroids
              <ArrowRightIcon />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {popularSteroids.map((steroid) => {
            return <SteroidCard key={steroid.id} steroid={steroid} />;
          })}
        </div>
      </div>
    </div>
  );
}
