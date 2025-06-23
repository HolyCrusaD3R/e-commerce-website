import { Link } from "react-router-dom";

const NavBtn = ({ to = "/" }) => {
  return (
    <Link
      to={to}
      className="h-full text-center px-4 flex flex-col justify-center text-c-primary border-b-2 border-transparent hover:border-c-primary transition-all"
    >
      link
    </Link>
  );
};

export default NavBtn;
