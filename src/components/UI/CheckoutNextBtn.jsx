const CheckoutNextBtn = ({ to, children, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-block cursor-pointer bg-c-primary rounded text-white font-semibold font-roboto text-xl text-center py-2 px-[44px]"
    >
      {children}
    </button>
  );
};
export default CheckoutNextBtn;
