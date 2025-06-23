import { useListings } from "../context/ListingsContext";

export default function HomePage() {
  const { listings } = useListings();
  console.log(listings);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
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
