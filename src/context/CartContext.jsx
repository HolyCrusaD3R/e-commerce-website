import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([
    // { id: 1, size: "S", quantity: 1 },
    // { id: 2, size: "L", quantity: 1 },
    // { id: 6, size: "M", quantity: 2 },
  ]);

  const removeFromCart = (id, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const updateQuantity = (id, size, newQty) => {
    if (newQty <= 0) {
      removeFromCart(id, size);
    } else {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: newQty }
            : item
        )
      );
    }
  };

  const updateSize = (id, oldSize, newSize) => {
    setCart((prevCart) => {
      const targetIndex = prevCart.findIndex(
        (item) => item.id === id && item.size === oldSize
      );

      if (targetIndex === -1) return prevCart;

      const existing = prevCart.find(
        (item) => item.id === id && item.size === newSize
      );

      const quantityToMove = prevCart[targetIndex].quantity;

      // If target size already exists — merge quantities
      if (existing) {
        return prevCart
          .filter((item, idx) => idx !== targetIndex)
          .map((item) =>
            item.id === id && item.size === newSize
              ? { ...item, quantity: item.quantity + quantityToMove }
              : item
          );
      }

      // Else, replace the item in place with updated size
      const updatedCart = [...prevCart];
      updatedCart[targetIndex] = { ...updatedCart[targetIndex], size: newSize };
      return updatedCart;
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const getQuantity = (cart, id, size) => {
    const found = cart.find((item) => item.id === id && item.size === size);
    return found ? found.quantity : 1;
  };

  const addToCart = (id, size, quantity = 1) => {
    setCart((prevCart) => {
      const existing = prevCart.find(
        (item) => item.id === id && item.size === size
      );

      if (existing) {
        return prevCart.map((item) =>
          item.id === id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { id, size, quantity }];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        clearCart,
        addToCart,
        updateQuantity,
        updateSize,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
