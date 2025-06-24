import { useState } from "react";

const CartBtnSm = ({
  activeOnMount = false,
  onClick,
  children,
  textSize = "text-sm",
}) => {
  const [active, setActive] = useState(activeOnMount);
  return (
    <div
      className={`border cursor-pointer border-c-black min-w-6 min-h-6 px-1 flex flex-col justify-center text-center text-sm items-center ${
        active || activeOnMount
          ? "bg-c-black text-white"
          : "bg-transparent text-c-black"
      }
        ${textSize === "text-sm" ? "text-sm" : textSize}`}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default CartBtnSm;
