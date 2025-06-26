import { useNavigate } from "react-router-dom";
import CheckoutCart from "../components/CheckoutCart/CheckoutCart";
import TextInput from "../components/UI/TextInput";
import { useCheckoutForm } from "../context/CheckoutFormContext";
import { useState } from "react";
import SelectInput from "../components/UI/SelectInput";
import CheckoutNextBtn from "../components/UI/CheckoutNextBtn";
import CheckoutPrevBtn from "../components/UI/CheckoutPrevBtn";
import { validateCheckoutDetails } from "../validators/checkoutDetailsValidator";

const CheckoutDetailsPage = () => {
  const { formData, updateForm } = useCheckoutForm();
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    email: null,
    phone: null,
    firstName: null,
    lastName: null,
    address: null,
    country: null,
    postalCode: null,
  });

  const handleNext = () => {
    const newErrors = validateCheckoutDetails(formData);

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate("/checkout/shipping");
    }
  };

  return (
    <div className="flex flex-row justify-between mt-20">
      <div className="w-3/10 p-4 flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <TextInput
            name="email"
            value={formData.email}
            placeholder="email"
            onChange={(e) => updateForm("email", e.target.value)}
            error={errors.email}
          />
          <TextInput
            name="phone"
            value={formData.phone}
            placeholder="phone"
            onChange={(e) => updateForm("phone", e.target.value)}
            error={errors.phone}
          />
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Shipping Address</h2>
          <div className="flex flex-row gap-2 justify-between">
            <div className="w-1/2">
              <TextInput
                name="firstName"
                value={formData.firstName}
                placeholder="Name"
                onChange={(e) => updateForm("firstName", e.target.value)}
                error={errors.firstName}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                name="lastName"
                value={formData.lastName}
                placeholder="Second Name"
                onChange={(e) => updateForm("lastName", e.target.value)}
                error={errors.lastName}
              />
            </div>
          </div>
          <TextInput
            name="address"
            value={formData.address}
            placeholder="Address and number"
            onChange={(e) => updateForm("address", e.target.value)}
            error={errors.address}
          />
          <div className="flex flex-row gap-2 justify-between">
            <div className="w-1/2">
              <SelectInput
                label="country"
                name="country"
                value={formData.country}
                onChange={(e) => updateForm("country", e.target.value)}
                error={errors.country}
                options={["USA", "Europe", "Georgia"]}
              />
            </div>
            <div className="w-1/2">
              <TextInput
                name="postalCode"
                value={formData.postalCode}
                placeholder="Postal Code"
                onChange={(e) => updateForm("postalCode", e.target.value)}
                error={errors.postalCode}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-between w-full">
          <CheckoutPrevBtn to={"/cart"}>Back to cart</CheckoutPrevBtn>
          <CheckoutNextBtn to={"/checkout/shipping"} onClick={handleNext}>
            Go to Shipping
          </CheckoutNextBtn>
        </div>
      </div>
      <div className="w-2/5">
        <CheckoutCart />
      </div>
    </div>
  );
};

export default CheckoutDetailsPage;
