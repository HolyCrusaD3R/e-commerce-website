import { NavLink, useNavigate } from "react-router-dom";
import CheckoutCart from "../components/CheckoutCart/CheckoutCart";
import { useCheckoutForm } from "../context/CheckoutFormContext";
import CheckoutNextBtn from "../components/UI/CheckoutNextBtn";
import CheckoutPrevBtn from "../components/UI/CheckoutPrevBtn";
import ShippingInput from "../components/Shipping/ShippingInput";
import { useCurrency } from "../context/CurrencyContext";
import { symbols } from "../data/currencySymbols";
import CreditCard from "../assets/icons/CreditCard.svg";
import Icon from "../components/UI/Icon";
import TextInput from "../components/UI/TextInput";
import { useState } from "react";
import Lock from "../assets/icons/Lock.svg";
import InfoSquare from "../assets/icons/InfoSquare.svg";
import CheckCircle from "../assets/icons/CheckCircle.svg";
import validatePaymentForm from "../validators/validatePaymentForm";
const CheckoutPaymentPage = () => {
  const { currency } = useCurrency();
  const { formData, updateForm } = useCheckoutForm();
  const [paid, setPaid] = useState(false);
  const [errors, setErrors] = useState({
    cardNumber: null,
    holderName: null,
    expiry: null,
    cvv: null,
  });

  const handleNext = () => {
    console.log("test");
    const validationErrors = validatePaymentForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setPaid(true);
  };

  return (
    <>
      {paid ? (
        <div className="flex flex-row justify-between mt-20">
          <div className="w-6/10 h-80 ">
            <div className="w-1/2 mx-auto mt-8 flex flex-col gap-4 items-center text-center">
              <Icon icon={CheckCircle} size={100} />
              <p className="font-bold text-2xl">Payment Confirmed</p>
              <p className="text-c-primary">ORDER #2039</p>
              <NavLink to={"/"}>
                <CheckoutNextBtn to={"/"}>Back to shopping</CheckoutNextBtn>
              </NavLink>
            </div>
          </div>
          <div className="w-2/5">
            <CheckoutCart />
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-between mt-20">
          <div className="w-3/10 p-4 flex flex-col gap-8">
            <div className="rounded-xl border border-gray-300 px-8 py-5 flex flex-col gap-2">
              <div className="flex flex-row gap-2 p-3">
                <p className="text-gray-300 w-15">Contact</p>
                <p>{formData.email}</p>
              </div>
              <hr className="border-gray-300" />
              <div className="flex flex-row gap-2 p-3">
                <p className="text-gray-300 w-15">Ship to</p>
                <p>{formData.address}</p>
              </div>
              <hr className="border-gray-300" />
              <div className="flex flex-row gap-2 p-3">
                <p className="text-gray-300 w-15">Method</p>
                <p className="capitalize flex flex-row gap-2">
                  {formData.shippingMethod + " Shipping"}-{" "}
                  {formData.shippingPrice === 0
                    ? "FREE"
                    : symbols[currency] + formData.shippingPrice[currency]}
                </p>
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-2xl font-semibold mb-2">Payment method</h2>
              <div className="w-full bg-gradient-to-r from-[#56B280]/10 to-[#56B280]/40 px-5 py-4 rounded-t-xl">
                <Icon icon={CreditCard} size={31} />
              </div>
              <div className="border border-gray-300 rounded-b-xl px-5 py-6 flex flex-col">
                <TextInput
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={(e) => updateForm("cardNumber", e.target.value)}
                  placeholder="Card Number"
                  error={errors.cardNumber}
                  icon={Lock}
                />
                <TextInput
                  name="holderName"
                  value={formData.holderName}
                  onChange={(e) => updateForm("holderName", e.target.value)}
                  placeholder="Holder Name"
                  error={errors.holderName}
                />
                <div className="flex flex-row gap-4 justify-between">
                  <div className="w-1/2">
                    <TextInput
                      name="expiry"
                      value={formData.expiry}
                      onChange={(e) => updateForm("expiry", e.target.value)}
                      placeholder="Expiration (MM/YY)"
                      error={errors.expiry}
                    />
                  </div>
                  <div className="w-1/2">
                    <TextInput
                      name="cvv"
                      value={formData.cvv}
                      onChange={(e) => updateForm("cvv", e.target.value)}
                      placeholder="CVV"
                      error={errors.cvv}
                      icon={InfoSquare}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between w-full">
              <CheckoutPrevBtn to={"/checkout/shipping"}>
                Back to shipping
              </CheckoutPrevBtn>
              <CheckoutNextBtn to={"/checkout/shipping"} onClick={handleNext}>
                Pay now
              </CheckoutNextBtn>
            </div>
          </div>
          <div className="w-2/5">
            <CheckoutCart />
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPaymentPage;
