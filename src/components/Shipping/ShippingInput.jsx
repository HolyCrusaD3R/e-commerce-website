import { useCheckoutForm } from "../../context/CheckoutFormContext";
import { useCurrency } from "../../context/CurrencyContext";
import RadioInput from "../UI/RadioInput";

const ShippingInput = () => {
  const { formData, updateForm } = useCheckoutForm();
  const { currency } = useCurrency();
  const expressPrices = { usd: 4.99, eur: 4.26, gel: 13.6 };
  const handleUpdateMethod = (newVal, price) => {
    updateForm("shippingMethod", newVal);
    updateForm("shippingPrice", price);
  };

  return (
    <div className="flex flex-col gap-2">
      <RadioInput
        option={"Standard Shipping"}
        price={"free"}
        selected={formData.shippingMethod === "standard"}
        onClick={() => handleUpdateMethod("standard", 0)}
      />
      <RadioInput
        option={"Express Shipping"}
        price={expressPrices[currency]} // ✅ only pass the number
        selected={formData.shippingMethod === "express"}
        onClick={() => handleUpdateMethod("express", expressPrices[currency])}
      />
    </div>
  );
};

export default ShippingInput;
