import BackButton from "@/components/base/BackButton";
import ProductParameterPill from "@/components/base/ProductParameterPill";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/db";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { notFound } from "next/navigation";

const SteroidsCategoryPage = async ({
  params,
}: {
  params: Promise<{
    category: string;
    steroidId: string;
  }>;
}) => {
  const { steroidId } = await params;

  const steroid = await prisma.steroid.findUnique({
    where: {
      id: steroidId,
    },
    include: {
      Category: true,
    },
  });

  if (!steroid) {
    return notFound();
  }

  const SteroidImage = () => {
    return (
      <Image
        src={`https://via.assets.so/img.jpg?w=512&h=512&tc=%236d28d9&bg=%231f2937&t=${
          steroid.name ?? "Steroid"
        }`}
        width={512}
        height={512}
        alt={steroid.name}
        className="rounded object-cover w-full max-h-[32rem] bg-muted"
      />
    );
  };

  const handleAddToCart = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="py-4">
      <div className="grid lg:grid-cols-2 gap-8 py-4">
        <div className="grid h-fit gap-4 sticky top-40">
          <header className="flex items-center gap-4 h-10">
            <BackButton />
            <span className="text-xl">Back</span>
          </header>
          <SteroidImage />
          <div className="grid grid-cols-3 gap-4">
            <SteroidImage />

            <SteroidImage />

            <SteroidImage />
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4">
          <header className="flex flex-col gap-1">
            <h1 className="text-4xl">{steroid.name}</h1>
            <p className="text-foreground/80">{steroid.description}</p>
          </header>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Amount</h2>
            <div className="flex gap-2 flex-wrap">
              <ProductParameterPill>90 tablets</ProductParameterPill>
              <ProductParameterPill>270 tablets</ProductParameterPill>
              <ProductParameterPill>540 tablets</ProductParameterPill>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Quantity</h2>
          </div>
          <Button>
            Buy now
            <ShoppingCart />
          </Button>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            rem velit amet nemo magnam quae quas dolores, maxime accusamus
            facilis saepe. Facere perspiciatis nisi deserunt aliquid.
            Distinctio, rem nisi? Nulla? Soluta corporis ducimus, nisi ipsa
            consequuntur ex quia nihil temporibus suscipit tempore accusamus
            mollitia aut, ad nam ullam doloribus omnis, sunt quae animi eaque
            libero eos? Tempore soluta in fuga. Totam explicabo quas impedit
            pariatur, dolore id natus consequuntur consequatur illum maxime
            blanditiis molestiae dolores ab, aliquid, error nobis dolor adipisci
            eius! Quos nemo illum sint quidem modi quisquam dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            rem velit amet nemo magnam quae quas dolores, maxime accusamus
            facilis saepe. Facere perspiciatis nisi deserunt aliquid.
            Distinctio, rem nisi? Nulla? Soluta corporis ducimus, nisi ipsa
            consequuntur ex quia nihil temporibus suscipit tempore accusamus
            mollitia aut, ad nam ullam doloribus omnis, sunt quae animi eaque
            libero eos? Tempore soluta in fuga. Totam explicabo quas impedit
            pariatur, dolore id natus consequuntur consequatur illum maxime
            blanditiis molestiae dolores ab, aliquid, error nobis dolor adipisci
            eius! Quos nemo illum sint quidem modi quisquam dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            rem velit amet nemo magnam quae quas dolores, maxime accusamus
            facilis saepe. Facere perspiciatis nisi deserunt aliquid.
            Distinctio, rem nisi? Nulla? Soluta corporis ducimus, nisi ipsa
            consequuntur ex quia nihil temporibus suscipit tempore accusamus
            mollitia aut, ad nam ullam doloribus omnis, sunt quae animi eaque
            libero eos? Tempore soluta in fuga. Totam explicabo quas impedit
            pariatur, dolore id natus consequuntur consequatur illum maxime
            blanditiis molestiae dolores ab, aliquid, error nobis dolor adipisci
            eius! Quos nemo illum sint quidem modi quisquam dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            rem velit amet nemo magnam quae quas dolores, maxime accusamus
            facilis saepe. Facere perspiciatis nisi deserunt aliquid.
            Distinctio, rem nisi? Nulla? Soluta corporis ducimus, nisi ipsa
            consequuntur ex quia nihil temporibus suscipit tempore accusamus
            mollitia aut, ad nam ullam doloribus omnis, sunt quae animi eaque
            libero eos? Tempore soluta in fuga. Totam explicabo quas impedit
            pariatur, dolore id natus consequuntur consequatur illum maxime
            blanditiis molestiae dolores ab, aliquid, error nobis dolor adipisci
            eius! Quos nemo illum sint quidem modi quisquam dolor.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            rem velit amet nemo magnam quae quas dolores, maxime accusamus
            facilis saepe. Facere perspiciatis nisi deserunt aliquid.
            Distinctio, rem nisi? Nulla? Soluta corporis ducimus, nisi ipsa
            consequuntur ex quia nihil temporibus suscipit tempore accusamus
            mollitia aut, ad nam ullam doloribus omnis, sunt quae animi eaque
            libero eos? Tempore soluta in fuga. Totam explicabo quas impedit
            pariatur, dolore id natus consequuntur consequatur illum maxime
            blanditiis molestiae dolores ab, aliquid, error nobis dolor adipisci
            eius! Quos nemo illum sint quidem modi quisquam dolor.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SteroidsCategoryPage;
