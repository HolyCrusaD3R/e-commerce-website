import { useNavigate } from "react-router-dom";
import CheckoutCart from "../components/CheckoutCart/CheckoutCart";
import { useCheckoutForm } from "../context/CheckoutFormContext";
import CheckoutNextBtn from "../components/UI/CheckoutNextBtn";
import CheckoutPrevBtn from "../components/UI/CheckoutPrevBtn";
import ShippingInput from "../components/Shipping/ShippingInput";

const CheckoutShippingPage = () => {
  const { formData, updateForm } = useCheckoutForm();
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/checkout/payment");
  };

  return (
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
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold">Shipping Method</h2>
          <ShippingInput />
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

export default CheckoutShippingPage;
