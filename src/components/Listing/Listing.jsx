import { Link } from "react-router-dom";
import { useCurrency } from "../../context/CurrencyContext";
import { useCart } from "../../context/CartContext";
import { symbols } from "../../data/currencySymbols";
import ShoppingCartWhite from "../../assets/icons/ShoppingCartWhite.svg";
import Icon from "../UI/Icon";

const Listing = ({ listing }) => {
  const { currency } = useCurrency();
  const { addToCart } = useCart();
  const handleAddToCart = (id, size) => {
    addToCart(id, size, 1);
  };
  return (
    <Link
      to={`/listing/${listing.id}`}
      className="group flex flex-col justify-between gap-6 p-4 w-1/4 hover:shadow"
    >
      <div className="relative">
        <img
          src={listing.images[0]}
          alt={listing.title}
          className="w-full aspect-square object-cover object-center"
        />
        <div
          className="rounded-[50px] p-4 bg-c-primary w-fit absolute bottom-0 right-0 translate-y-1/2 hidden group-hover:flex items-center justify-center"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            handleAddToCart(listing.id, listing.sizes[0]);
          }}
        >
          <button className="p-0 m-0 border-none bg-transparent cursor-pointer">
            <Icon icon={ShoppingCartWhite} size={24} />
          </button>
        </div>
      </div>
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
