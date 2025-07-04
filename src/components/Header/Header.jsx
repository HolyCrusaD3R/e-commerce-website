import Icon from "../UI/Icon";
import BrandIcon from "../../assets/icons/Brandicon.svg";
import NavBtns from "./NavBtns";
import { NavLink } from "react-router-dom";
import CurrencyChanger from "../UI/CurrencyChanger";
import Cart from "../UI/Cart";

const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0 h-20 bg-white z-40 ">
      <div className="w-9/10 my-0 mx-auto h-full flex justify-between">
        <NavBtns /> {/* Btns */}
        <NavLink to={"/"} className="my-auto">
          <Icon icon={BrandIcon} size={41} />
        </NavLink>
        <div className="my-auto flex flex-row gap-5">
          <CurrencyChanger />
          <Cart />
        </div>{" "}
        {/* Optns */}
      </div>
    </div>
  );
};

export default Header;
