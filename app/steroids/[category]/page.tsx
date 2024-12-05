import SteroidList from "@/components/steroids/SteroidList";
import { prisma } from "@/lib/db";
import { getFiltersPrisma } from "@/lib/filters";
import type { SearchParamsPage } from "@/lib/types";
import { notFound } from "next/navigation";

const SteroidsCategoryPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{
    category: string;
  }>;
  searchParams: SearchParamsPage;
}) => {
  const { category } = await params;

  const filters = await getFiltersPrisma(searchParams);

  const steroids = await prisma.steroid.findMany({
    where: {
      Category: {
        slug: category,
      },
    },
    include: {
      Category: true,
    },
    orderBy: {
      ...(filters.orderBy as any),
    },
  });

  const currentCategory = steroids[0].Category;

  if (!currentCategory) {
    return notFound();
  }

  return (
    <div className="py-8">
      <h1 className="text-4xl">{currentCategory.name}</h1>
      <SteroidList steroids={steroids} />
    </div>
  );
};

export default SteroidsCategoryPage;
