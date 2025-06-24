import { useNavigate, useParams } from "react-router-dom";
import { useListings } from "../context/ListingsContext";
import { useCurrency } from "../context/CurrencyContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import CartBtnSm from "../components/UI/CartBtnSm";
import CartBtnXl from "../components/UI/CartBtnXl";
import { symbols } from "../data/currencySymbols";

export default function ListingPage() {
  const navigation = useNavigate();

  const { id } = useParams();
  const { listings } = useListings();
  const { currency } = useCurrency();
  const { addToCart } = useCart();

  const listing = listings.find((item) => item.id == id);
  const [selectedSize, setSelectedSize] = useState(listing?.sizes?.[0]);
  const [selectedImage, setSelectedImage] = useState(listing?.images?.[0]);

  const handleAddToCart = () => {
    addToCart(listing.id, selectedSize, 1);
    navigation("/");
  };

  if (!listing)
    return <p className="mt-20 pt-20 w-9/10 mx-auto">Listing not found.</p>;

  return (
    <div className="flex flex-row  justify-around gap-10 px-20 pb-20 mt-20 pt-20 w-9/10 mx-auto">
      {/* LEFT SIDE: images */}
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-2">
          {listing.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Thumbnail ${i}`}
              className={`w-16 h-16 object-cover cursor-pointer border ${
                img === selectedImage
                  ? "border-c-primary"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
        <img
          src={selectedImage}
          alt={listing.title}
          className="w-[500px] h-[500px] object-cover object-center"
        />
      </div>
      {/* RIGHT SIDE: details */}
      <div className="flex flex-col gap-6 w-[400px]">
        <div>
          <p className="text-2xl font-semibold">{listing.company}</p>
          <p className="text-xl">{listing.title}</p>
        </div>

        <div>
          <p className="font-semibold mb-2">SIZE:</p>
          <div className="flex flex-row gap-2">
            {listing.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`cursor-pointer px-4 py-2 border ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-semibold mb-2">PRICE:</p>
          <p className="text-xl font-bold">
            {symbols[currency]}
            {listing.prices[currency].toFixed(2)}
          </p>
        </div>

        <CartBtnXl onClick={handleAddToCart}>ADD TO CART</CartBtnXl>

        <p className="text-sm leading-relaxed text-gray-600">
          {listing.description}
        </p>
      </div>
    </div>
  );
}
