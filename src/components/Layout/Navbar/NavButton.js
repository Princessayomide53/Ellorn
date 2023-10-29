import React, { useContext } from "react";
import { GiShoppingCart } from "react-icons/gi";
import CartContext from "../../../store/cart-context";

const NavButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);
  return (
    <button
      className="flex sm:space-x-3 space-x-3 sm:px-[3rem] px-[1rem] py-[0.35rem] sm:py-[0.75rem] bg-black text-white rounded-full sm:-mt-2"
      onClick={props.onClick}
    >
      Carts{" "}
      <span className="px-2 sm:pt-1 sm:text-2xl text-white text-sm">
        <GiShoppingCart />
      </span>
      <span className="font-bold">{numberOfCartItems}</span>
    </button>
  );
};

export default NavButton;
