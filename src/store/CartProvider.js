import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.items.amount;
    const existingCartIndex = state.items.findIndex(
      (item) => item.id === action.items.id
    );
    const existingCart = state.items[existingCartIndex];

    let updatedItems;

    if (existingCart) {
      const updatedItem = {
        ...existingCart,
        quantity: existingCart.quantity + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat({ ...action.items, quantity: 1 });
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE") {
  }
  return defaultState;
};

export const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultState);

  const addItemsHandler = (items) => {
    dispatchCart({ type: "ADD", items: items });
  };
  const removeItemsHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addCart: addItemsHandler,
    removeCart: removeItemsHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
