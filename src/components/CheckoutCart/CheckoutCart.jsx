import { useCart } from "../../context/CartContext";
import { useListings } from "../../context/ListingsContext";
import { useCurrency } from "../../context/CurrencyContext";
import { symbols } from "../../data/currencySymbols";
import ItemQuantity from "../UI/ItemQuantity";
import { useCheckoutForm } from "../../context/CheckoutFormContext";
import { useLocation } from "react-router-dom";

const CheckoutSummaryRight = () => {
  const { cart } = useCart();
  const { listings } = useListings();
  const { currency } = useCurrency();
  const { formData } = useCheckoutForm();
  const location = useLocation();
  let step = location.pathname.split("/").pop();

  const subtotal = cart.reduce((acc, item) => {
    const listing = listings.find((l) => l.id === item.id);
    if (!listing) return acc;
    return acc + listing.prices[currency] * item.quantity;
  }, 0);

  const shippingCost =
    step === "checkout"
      ? 0
      : formData.shippingPrice === 0
      ? 0
      : formData.shippingPrice[currency];
  const shippingNote =
    step === "checkout"
      ? "To be calculated in the next step"
      : symbols[currency] + shippingCost;

  const grandTotal = (subtotal + shippingCost).toFixed(2);

  return (
    <div className="w-full p-6">
      <ul className="flex flex-col gap-10 mb-6">
        {cart.map((item) => {
          const listing = listings.find((l) => l.id === item.id);
          if (!listing) return null;

          const price = listing.prices[currency];
          const totalPrice = price * item.quantity;

          return (
            <li
              key={`${item.id}-${item.size}`}
              className="flex flex-col gap-1 mb-2"
            >
              <div className="flex justify-between text-sm">
                <div className="relative">
                  <img
                    src={listing.images[0]}
                    className="aspect-square w-50 object-cover object-center"
                  />
                  <ItemQuantity num={item.quantity} color="bg-c-primary" />
                </div>
                <div>
                  <p className="font-medium text-xl">
                    {listing.company} {listing.title}
                  </p>
                  <p className="text-xs text-gray-500 text-[20px]">
                    Size: {item.size}
                  </p>

                  <p className="font-bold text-xl text-c-primary">
                    {symbols[currency]}
                    &nbsp;
                    {totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>
              <hr />
            </li>
          );
        })}
      </ul>

      <div className="flex flex-col gap-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium">
            {symbols[currency]}
            &nbsp;
            {subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium">
            {step === "checkout" ? (
              <span className="italic text-gray-500">{shippingNote}</span>
            ) : (
              symbols[currency] + " " + shippingCost.toFixed(2)
            )}
          </span>
        </div>

        <div className="flex justify-between pt-2 border-t font-bold text-base">
          <span>Total</span>
          <span className="font-bold text-4xl">
            {symbols[currency]}
            &nbsp;
            {grandTotal}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummaryRight;
