import React, { useContext, useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import CartContext from "../../../store/cart-context";

const NavButton = (props) => {
  const [cartHighlighted, setCartHighLighted] = useState(false);
  const ctx = useContext(CartContext);

  const numberOfCartItems = ctx.items.length;

  const { items } = ctx;

  useEffect(() => {
    if (items === 0) {
      return;
    }
    setCartHighLighted(true);
    const timer = setTimeout(() => {
      setCartHighLighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button
      className={`${
        cartHighlighted ? "bump" : ""
      } ${"flex sm:space-x-3 space-x-3 sm:px-[3rem] px-[0.7rem] py-[0.35rem] sm:py-[0.75rem] bg-black text-white rounded-full sm:-mt-2"}`}
      onClick={props.onClick}
    >
      Carts{" "}
      <span className="px-1 sm:pt-1 sm:text-2xl text-white text-sm">
        <GiShoppingCart />
      </span>
      <span className="font-bold">{numberOfCartItems}</span>
    </button>
  );
};

export default NavButton;
