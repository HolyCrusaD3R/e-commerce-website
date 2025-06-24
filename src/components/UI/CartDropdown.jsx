import { useListings } from "../../context/ListingsContext";
import { useCurrency } from "../../context/CurrencyContext";
import { useCart } from "../../context/CartContext";
import { symbols } from "../../data/currencySymbols";
import CartBtnSm from "./CartBtnSm";
import CartBtnXl from "./CartBtnXl";

const CartDropdown = () => {
  const { listings } = useListings();
  const { currency } = useCurrency();
  const { cart, updateQuantity, updateSize } = useCart();

  const handleIncrementQuantity = (id, size, quantity) => {
    updateQuantity(id, size, quantity + 1);
  };

  const handleDecrementQuantity = (id, size, quantity) => {
    updateQuantity(id, size, quantity - 1);
  };

  const handleUpdateSize = (id, size, newSize) => {
    updateSize(id, size, newSize);
  };

  return (
    <div className="w-120 bg-white absolute top-full right-0 translate-x-5 translate-y-2 px-4 py-8 z-30">
      <p>
        <strong>My Bag,</strong> {cart.length} items
      </p>
      <ul className="list-none mt-8 flex flex-col gap-4">
        {cart.map((el) => {
          const listing = listings.find((item) => item.id === el.id);
          return (
            listing && (
              <li
                key={`${el.id}-${el.size}`}
                className="flex flex-row justify-between h-36 w-full gap-2 shrink-0"
              >
                <div className="w-3/5 flex flex-row justify-between">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-1">
                      <p>{listing.company}</p>
                      <p>{listing.title}</p>
                      <p>
                        <strong>
                          {symbols[currency]}
                          {listing.prices[currency].toFixed(2)}
                        </strong>
                      </p>
                    </div>
                    <div className="flex flex-col">
                      <p>Size:</p>
                      <div className="flex flex-row gap-3">
                        {listing.sizes.map((listingSize) => {
                          return (
                            <div key={listingSize}>
                              <CartBtnSm
                                activeOnMount={el.size === listingSize}
                                onClick={() =>
                                  handleUpdateSize(el.id, el.size, listingSize)
                                }
                              >
                                {listingSize}
                              </CartBtnSm>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <CartBtnSm
                      onClick={() =>
                        handleIncrementQuantity(el.id, el.size, el.quantity)
                      }
                    >
                      +
                    </CartBtnSm>
                    <p className="mx-auto">{el.quantity}</p>
                    <CartBtnSm
                      onClick={() =>
                        handleDecrementQuantity(el.id, el.size, el.quantity)
                      }
                    >
                      -
                    </CartBtnSm>
                  </div>
                </div>
                <img
                  src={listing.images[0]}
                  alt={listing.title}
                  className="w-32 h-32 aspect-square object-cover object-center shrink-0"
                />
              </li>
            )
          );
        })}
      </ul>
      <div className="flex flex-row justify-between pt-10">
        <p className="text-xl">Total</p>
        <p>
          <strong>
            {cart
              .reduce((total, item) => {
                const listing = listings.find((l) => l.id === item.id);
                if (!listing) return total;
                return total + listing.prices[currency] * item.quantity;
              }, 0)
              .toFixed(2)}
          </strong>
        </p>
      </div>
      <div className="flex flex-row justify-between pt-10">
        <CartBtnXl to={"/cart"} ghost={true}>
          View Bag
        </CartBtnXl>
        <CartBtnXl to={"/checkout"}>Check out</CartBtnXl>
      </div>
    </div>
  );
};

export default CartDropdown;
