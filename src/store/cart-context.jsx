import React, { useState} from "react";

const CartContext = React.createContext({
  cartIsShown: false,
});

export const CartContextProvider = (props) => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return(
    <CartContext.Provider
    value={{
      cartIsShown:cartIsShown,
      onShowCart:showCartHandler,
      onCloseCart: hideCartHandler,
    }}
    >
      {props.children}
    </CartContext.Provider>
  )
};

export default CartContext;
