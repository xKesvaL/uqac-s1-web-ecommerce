import { prisma } from "@/lib/db";

export const GET = async () => {
  return Response.json(
    await prisma.steroid.findMany({
      include: {
        Category: true,
      },
    })
  );
};

export const dynamic = "force-static";
