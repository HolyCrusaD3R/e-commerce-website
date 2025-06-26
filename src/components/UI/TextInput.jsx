import Icon from "./Icon";

const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  error,
  icon,
}) => {
  const border = error ? "border-red-500" : "border-gray-300";
  return (
    <div className="flex flex-col gap-1/2 mb-4">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <div
        className={
          "h-12 border-[0.5px] border-gray-300 relative" + " " + border
        }
      >
        <input
          type="text"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={
            "h-full w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-c-primary focus:border-transparent" +
            " " +
            border
          }
        />
        {icon && (
          <div className="absolute top-1/2 right-0 -translate-1/2">
            <Icon icon={icon} size={18} />
          </div>
        )}
      </div>
      {
        <p className={`text-sm h-5 ${error ? "text-red-500" : "invisible"}`}>
          {error || " "}
        </p>
      }
    </div>
  );
};

export default TextInput;
