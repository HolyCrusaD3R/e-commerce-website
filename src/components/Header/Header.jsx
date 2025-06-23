import Icon from "../UI/Icon";
import BrandIcon from "../../assets/Brandicon.svg";
import NavBtns from "./NavBtns";

const Header = () => {
  return (
    <div className="w-full fixed top-0 left-0 h-20 bg-white">
      <div className="w-9/10 my-0 mx-auto h-full flex justify-between">
        <NavBtns /> {/* Btns */}
        <div className="my-auto">
          <Icon icon={BrandIcon} size={41} />
        </div>
        <div className="my-auto"></div> {/* Optns */}
      </div>
    </div>
  );
};

export default Header;
