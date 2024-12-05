import type { SearchParamsPage } from "./types";

export const getFiltersPrisma = async (searchParams: SearchParamsPage) => {
  const { sort: sortBy } = await searchParams;

  const filters = {
    orderBy: {
      ...(sortBy?.startsWith("name") && {
        name: sortBy === "name-asc" ? "asc" : "desc",
      }),
      ...(sortBy?.startsWith("price") && {
        price: sortBy === "price-asc" ? "asc" : "desc",
      }),
    },
  };

  return filters;
};
