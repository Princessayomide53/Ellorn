import React from "react";
import CartContext from "./cart-context";

export const CartProvider = (props) => {
  const addItemsHandler = (item) => {};
  const removeItemsHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItems: addItemsHandler,
    removeItems: removeItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
