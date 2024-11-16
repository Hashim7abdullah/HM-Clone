import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

const ShopContextProvider = (props) => {
  const navigate =useNavigate();
  const currency = "₹";

  const value = {
    currency,
    navigate,
  };
  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};

export default ShopContextProvider;
