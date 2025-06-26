import { Outlet } from "react-router-dom";
import CheckoutProgressNest from "../components/CheckoutProgressNest/CheckoutProgressNest";

const CheckoutLayout = () => {
  return (
    <div className="p-20 font-raleway text-c-black">
      <CheckoutProgressNest />
      <Outlet />
    </div>
  );
};

export default CheckoutLayout;
