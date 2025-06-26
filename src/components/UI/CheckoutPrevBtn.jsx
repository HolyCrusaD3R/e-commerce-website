import { NavLink } from "react-router-dom";

const CheckoutNextBtn = ({ to, children }) => {
  return (
    <NavLink to={to} className="text-c-primary text-xl underline p-2">
      {children}
    </NavLink>
  );
};

export default CheckoutNextBtn;
