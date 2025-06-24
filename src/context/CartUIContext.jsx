import { createContext, useContext, useState } from "react";

const CartUIContext = createContext();

export const CartUIProvider = ({ children }) => {
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const toggleCartDropdown = () => setShowCartDropdown((prev) => !prev);

  const closeCartDropdown = () => setShowCartDropdown(false);

  return (
    <CartUIContext.Provider
      value={{ showCartDropdown, toggleCartDropdown, closeCartDropdown }}
    >
      {children}
    </CartUIContext.Provider>
  );
};

export const useCartUI = () => useContext(CartUIContext);
