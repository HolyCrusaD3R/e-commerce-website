const ItemQuantity = ({ num, color }) => {
  return (
    <>
      {num > 0 && (
        <div
          className={
            "px-2 py-0.5 font-bold text-sm rounded-[60px] font-roboto text-center bg-c-black text-white absolute top-0 right-0 translate-x-1/2 -translate-y-1/2" +
            " " +
            color
          }
        >
          {num}
        </div>
      )}
    </>
  );
};

export default ItemQuantity;
