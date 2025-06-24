import { Link } from "react-router-dom";
import { useCurrency } from "../../context/CurrencyContext";
import { symbols } from "../../data/currencySymbols";

const Listing = ({ listing }) => {
  const { currency } = useCurrency();
  return (
    <Link
      to={`/listing/${listing.id}`}
      className="flex flex-col justify-between gap-6 p-4 w-1/4"
    >
      <img
        src={listing.images[0]}
        alt={listing.title}
        className="w-full aspect-square object-cover object-center"
      />
      <div className="flex flex-col justify-center">
        <p className="text-[18px]/[1.6] text-c-black">
          {listing.company} {listing.title}
        </p>
        <p className="text-[18px]/[1.6] text-c-black font-semibold">
          {symbols[currency]}
          {listing.prices[currency].toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default Listing;
