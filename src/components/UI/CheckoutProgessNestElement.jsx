import { useLocation } from "react-router-dom";
import RightArrowBlack from "../../assets/icons/RightArrowBlack.svg";
import Icon from "./Icon";

const steps = ["cart", "details", "shipping", "payment"];

const CheckoutProgressNestElement = ({ el, children }) => {
  const location = useLocation();
  let currStep = location.pathname.split("/").pop();
  if (currStep === "checkout") {
    currStep = "details";
  }
  const currIndex = steps.indexOf(currStep);
  const elIndex = steps.indexOf(el);
  console.log(currIndex);
  console.log(elIndex);
  let style = "text-[#616161]";
  if (currIndex === elIndex) {
    style = "text-c-black";
  }
  if (currIndex > elIndex) {
    style = "text-c-primary";
  }
  return (
    <div className="flex flex-row gap-2">
      <p className={style + " font-semibold"}>{children}</p>
      {el != "payment" && <Icon icon={RightArrowBlack} size={10} />}
    </div>
  );
};

export default CheckoutProgressNestElement;
