import DownArrow from "../../assets/icons/DownArrow.svg";
import VerticalLine from "../../assets/icons/VerticalLine.svg";
import Icon from "./Icon";

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options = [],
  required = false,
  error,
}) => {
  const border = error ? "border-red-500" : "border-gray-300";
  return (
    <div className="flex flex-col gap-1 mb-4 relative">
      <label
        htmlFor={name}
        className="text-xs font-medium absolute top-1 left-3.5 text-gray-400"
      >
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className={
          "appearance-none h-12 border-[0.5px] border-gray-300 px-3 py-2 pt-4 bg-white focus:outline-none focus:ring-2 focus:ring-c-primary focus:border-transparent" +
          " " +
          border
        }
      >
        <option value="" disabled>
          {label.charAt(0).toUpperCase() + label.slice(1)}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <div className="absolute right-0 top-1/2 -translate-x-1/2 -translate-y-4/5 flex flex-row gap-2">
        <Icon icon={VerticalLine} size={1} />
        <Icon icon={DownArrow} size={10} />
      </div>
      {
        <p className={`text-sm h-5 ${error ? "text-red-500" : "invisible"}`}>
          {error || " "}
        </p>
      }
    </div>
  );
};

export default SelectInput;
