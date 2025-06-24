import { Link } from "react-router-dom";

const CartBtnXl = ({ to, ghost = false, children }) => {
  return (
    <Link
      to={to}
      className={`border px-8 py-4 border-c-black text-center font-semibold py-auto uppercase ${
        ghost ? "bg-transparent text-c-black" : "bg-c-primary text-white"
      }`}
    >
      {children}
    </Link>
  );
};

export default CartBtnXl;
