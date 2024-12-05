import type { SteroidWithCategory } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";

const SteroidCard = async ({ steroid }: { steroid: SteroidWithCategory }) => {
  if (!steroid.Category) return null;

  return (
    <Link
      href={`/steroids/${steroid.Category.slug}/${steroid.id}`}
      className="border border-border rounded-lg p-4 flex flex-col gap-4 hover:border-foreground/30 transition"
    >
      <Image
        src={`https://via.assets.so/img.jpg?w=450&h=450&tc=%236d28d9&bg=%231f2937&t=${
          steroid.name ?? "Steroid"
        }`}
        width={250}
        height={250}
        alt={steroid.name}
        className="rounded w-full object-cover max-h-56 bg-muted"
      />
      <div className="flex flex-col">
        <h3 className="text-lg">{steroid.name}</h3>
        <div className="flex justify-between gap-4">
          <span className="text-sm text-muted-foreground">
            {steroid.Category.name}
          </span>
          <span className="text-xl whitespace-nowrap">{steroid.price} €</span>
        </div>
      </div>
    </Link>
  );
};

export default SteroidCard;
