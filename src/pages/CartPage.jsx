import CartBtnXl from "../components/UI/CartBtnXl";
import { useCart } from "../context/CartContext";
import { useListings } from "../context/ListingsContext";
import { symbols } from "../data/currencySymbols";
import { useCurrency } from "../context/CurrencyContext";
import CartBtnSm from "../components/UI/CartBtnSm";
import ImageCarousel from "../components/UI/ImageCarousel";

export default function HomePage() {
  const { cart, updateQuantity, updateSize } = useCart();
  const { listings } = useListings();
  const { currency } = useCurrency();

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
    <>
      <div className="mt-20 pt-20 w-9/10 mx-auto text-xl">
        <h1 className="uppercase font-bold">Cart</h1>
        <ul className="list-none mt-8 flex flex-col gap-20">
          {cart.map((el) => {
            const listing = listings.find((item) => item.id === el.id);
            return (
              listing && (
                <li
                  key={`${el.id}-${el.size}`}
                  className="flex flex-row justify-between w-full gap-2 shrink-0"
                >
                  <div className="w-4/5 flex flex-row justify-between text-2xl">
                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <p>
                          <strong>{listing.company}</strong>
                        </p>
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
                                    handleUpdateSize(
                                      el.id,
                                      el.size,
                                      listingSize
                                    )
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
                  <ImageCarousel
                    images={listing.images}
                    alt={listing.title}
                    className="w-60 h-60 aspect-square shrink-0"
                  />
                </li>
              )
            );
          })}
        </ul>
        <div className="flex flex-row justify-start gap-2 pt-10">
          <p className="text-xl">Quantity:</p>
          <p>
            <strong>
              {cart.reduce((total, item) => {
                return total + item.quantity;
              }, 0)}
            </strong>
          </p>
        </div>
        <div className="flex flex-row justify-start gap-2 pt-10">
          <p className="text-xl">Total:</p>
          <p>
            <strong>
              {symbols[currency]}
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
          <CartBtnXl to={"/checkout"}>Continue</CartBtnXl>
        </div>
      </div>
    </>
  );
}
