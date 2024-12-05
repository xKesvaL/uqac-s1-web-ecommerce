import SteroidList from "@/components/steroids/SteroidList";
import { prisma } from "@/lib/db";
import { getFiltersPrisma } from "@/lib/filters";
import type { SearchParamsPage } from "@/lib/types";
import type { Steroid } from "@prisma/client";

const SteroidsPage = async ({
  searchParams,
}: {
  searchParams: SearchParamsPage;
}) => {
  const filters = await getFiltersPrisma(searchParams);

  const steroids = await prisma.steroid.findMany({
    include: {
      Category: true,
    },
    orderBy: {
      // eslint-disable-next-line
      ...(filters.orderBy as any),
    },
  });

  return (
    <div className="py-8">
      <h1 className="text-4xl">All Steroids</h1>
      <SteroidList steroids={steroids} />
    </div>
  );
};

export default SteroidsPage;
