const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  error,
}) => {
  const border = error ? "border-red-500" : "border-gray-300";
  return (
    <div className="flex flex-col gap-1 mb-4">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={
          "h-12 border-[0.5px] border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-c-primary focus:border-transparent" +
          " " +
          border
        }
      />
      {
        <p className={`text-sm h-5 ${error ? "text-red-500" : "invisible"}`}>
          {error || " "}
        </p>
      }
    </div>
  );
};

export default TextInput;
