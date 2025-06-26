import { useCurrency } from "../../context/CurrencyContext";
import { symbols } from "../../data/currencySymbols";
const RadioInput = ({ onClick, option, price, selected = false }) => {
  const { currency } = useCurrency();
  const innerCircle = selected ? " bg-[#1583D7]" : " bg-gray-400";
  return (
    <div
      onClick={onClick}
      className="border cursor-pointer border-gray-300 rounded p-5 flex flex-row w-full justify-between"
    >
      <div className="flex flex-row gap-5">
        <div className="flex flex-col justify-center">
          <div className="bg-gray-300 rounded-4xl p-2">
            <div className={"rounded-4xl p-2" + innerCircle}></div>
          </div>
        </div>
        <p className="flex flex-col justify-center">{option}</p>
      </div>
      <p className="font-bold flex flex-col justify-center">
        {price === "free" ? "Free" : `${price} ${symbols[currency]}`}
      </p>
    </div>
  );
};

export default RadioInput;
