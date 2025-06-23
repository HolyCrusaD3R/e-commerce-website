import { createContext, useContext } from "react";
import { listings } from "../data/data";

const ListingsContext = createContext();

export const ListingsProvider = ({ children }) => {
  return (
    <ListingsContext.Provider value={{ listings }}>
      {children}
    </ListingsContext.Provider>
  );
};

export const useListings = () => useContext(ListingsContext);
