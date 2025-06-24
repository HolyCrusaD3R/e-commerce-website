import Icon from "./Icon";
import DownArrow from "../../assets/icons/DownArrow.svg";
import UpArrow from "../../assets/icons/UpArrow.svg";
import { symbols } from "../../data/currencySymbols";
import { useState } from "react";
import { useCurrency } from "../../context/CurrencyContext";

const CurrencyChanger = () => {
  const { currency, setCurrency } = useCurrency();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleChangeCurrency = (code) => {
    setCurrency(code);
    handleDropdownToggle();
  };

  const handleClickOutside = () => {
    setShowDropdown(false);
  };

  return (
    <div className="relative cursor-pointer">
      <div className="flex flex-row" onClick={handleDropdownToggle}>
        <p className="px-3">{symbols[currency]}</p>
        <Icon icon={showDropdown ? UpArrow : DownArrow} size={6} />
      </div>
      <div className="absolute left-0 top-full -translate-x-1/4 py-5">
        {Object.entries(symbols).map(([code, symbol]) => (
          <button
            key={code}
            onClick={() => handleChangeCurrency(code)}
            className={`w-full px-5 py-2 text-center hover:bg-gray-100 flex flex-row gap-1 cursor-pointer ${
              showDropdown ? "flex" : "hidden"
            }`}
          >
            <p>{symbol}</p>
            <p>{code.toUpperCase()}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
// :)
export default CurrencyChanger;
