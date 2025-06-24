import Icon from "./Icon";

import ShoppingCart from "../../assets/icons/ShoppingCart.svg";
import ItemQuantity from "../UI/ItemQuantity";
import { useCart } from "../../context/CartContext";
import { useCartUI } from "../../context/CartUIContext";
import CartDropdown from "./CartDropdown";

const Cart = () => {
  const { cart } = useCart();
  const { showCartDropdown, toggleCartDropdown } = useCartUI();

  const handleshowCartDropdownToggle = () => {
    toggleCartDropdown();
  };

  return (
    <div className="relative">
      <div onClick={handleshowCartDropdownToggle} className="cursor-pointer">
        <Icon icon={ShoppingCart} size={20} />
        <ItemQuantity num={cart.length} />
      </div>
      {showCartDropdown && <CartDropdown />}
    </div>
  );
};

export default Cart;
