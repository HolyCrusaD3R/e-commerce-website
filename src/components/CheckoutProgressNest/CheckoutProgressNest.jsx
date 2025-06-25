import CheckoutProgressNestElement from "../UI/CheckoutProgessNestElement";

const CheckoutProgressNest = () => {
  return (
    <div className="flex flex-row gap-2">
      <CheckoutProgressNestElement el={"cart"}>
        Cart
      </CheckoutProgressNestElement>
      <CheckoutProgressNestElement el={"details"}>
        Details
      </CheckoutProgressNestElement>
      <CheckoutProgressNestElement el={"shipping"}>
        Shipping
      </CheckoutProgressNestElement>
      <CheckoutProgressNestElement el={"payment"}>
        Payment
      </CheckoutProgressNestElement>
    </div>
  );
};

export default CheckoutProgressNest;
