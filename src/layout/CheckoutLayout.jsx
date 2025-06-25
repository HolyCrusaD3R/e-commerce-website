import { Outlet } from "react-router-dom";
import CheckoutProgressNest from "../components/CheckoutProgressNest/CheckoutProgressNest";

const CheckoutLayout = () => {
  return (
    <div className="p-20">
      <CheckoutProgressNest />
      <Outlet />
    </div>
  );
};

export default CheckoutLayout;
