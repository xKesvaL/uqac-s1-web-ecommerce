import SteroidCard from "./SteroidCard";
import type { SteroidWithCategory } from "@/lib/types";
import SteroidFilter from "./SteroidFilter";

const SteroidList = async ({
  steroids,
}: {
  steroids: SteroidWithCategory[];
}) => {
  return (
    <div className="">
      <SteroidFilter resultsCount={steroids.length} />

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {steroids.map((steroid) => {
          return <SteroidCard key={steroid.id} steroid={steroid} />;
        })}
      </div>
    </div>
  );
};

export default SteroidList;
