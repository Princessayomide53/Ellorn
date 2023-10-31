import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addCart: (items) => {},
  removeCart: (id) => {},
});

export default CartContext;
