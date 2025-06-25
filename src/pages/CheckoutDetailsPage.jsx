import { NavLink } from "react-router-dom";
import CheckoutCart from "../components/CheckoutCart/CheckoutCart";

const CheckoutDetailsPage = () => {
  return (
    <div className="flex flex-row justify-between mt-20">
      <div className="h-80 w-2/5 bg-red-500">
        <NavLink to={"/cart"}>Back to cart</NavLink>
      </div>
      <div className="w-1/2">
        <CheckoutCart />
      </div>
    </div>
  );
};

export default CheckoutDetailsPage;
