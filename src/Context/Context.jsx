import { createContext } from "react";

export const Context = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";

  const value = {
    currency,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ShopContextProvider;
