import type { Category, Steroid } from "@prisma/client";

export type SteroidWithCategory = Steroid & {
  Category: Category | null;
};

export type SearchParamsPage = Promise<{
  [key: string]: string | undefined;
}>;
