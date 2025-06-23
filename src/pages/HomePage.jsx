import { useListings } from "../context/ListingsContext";

export default function HomePage({ category = "women" }) {
  const { listings } = useListings();
  console.log(listings);
  return (
    <div className="mt-20 pt-20 w-9/10 mx-auto">
      <h1 className="uppercase">{category}</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-26">
        {listings.map((item) => (
          <div key={item.id} className="p-4 border rounded">
            <img
              src={item.images[0]}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <h2 className="mt-2 font-bold">{item.title}</h2>
            <p>€{item.prices.eur}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
