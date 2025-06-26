import { createContext, useContext, useState } from "react";

const CheckoutFormContext = createContext();

export const CheckoutFormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    // Step 1: Details
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    country: "",
    postalCode: "",

    // Step 2: Shipping
    shippingMethod: "standard",
    shippingPrice: 0,

    // Step 3: Payment
    cardNumber: "",
    holderName: "",
    expiry: "",
    cvv: "",
  });

  const updateForm = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <CheckoutFormContext.Provider value={{ formData, updateForm }}>
      {children}
    </CheckoutFormContext.Provider>
  );
};

export const useCheckoutForm = () => useContext(CheckoutFormContext);
