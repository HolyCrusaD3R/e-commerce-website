import RadioInput from "../UI/RadioInput";

const ShippingInput = ({ formData, updateFormData }) => {
  return (
    <div>
      <RadioInput option={"Standard Shipping"} price={"free"} />
    </div>
  );
};

export default ShippingInput;
