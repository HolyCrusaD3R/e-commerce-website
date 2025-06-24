import Listing from "../components/Listing/Listing";
import { useListings } from "../context/ListingsContext";

export default function HomePage({ category = "any" }) {
  const { listings } = useListings();
  return (
    <div className="mt-20 pt-20 w-9/10 mx-auto">
      <h1 className="uppercase">Category: {category}</h1>
      <div className="mt-24 flex flex-row justify-between flex-wrap gap-10">
        {listings
          .filter((item) => {
            return category === "any" || item.category === category;
          })
          .map((item) => (
            <Listing listing={item} key={item.id} />
          ))}
      </div>
    </div>
  );
}
