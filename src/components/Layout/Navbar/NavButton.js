import React from "react";
import { GiShoppingCart } from "react-icons/gi";

const NavButton = () => {
  return (
    <button className="flex sm:space-x-7 space-x-3 sm:px-[3rem] px-[1rem] py-[0.35rem] sm:py-[0.75rem] bg-black text-white rounded-full sm:-mt-2">
      Carts{" "}
      <span className="px-2 sm:pt-1 sm:text-2xl text-white text-sm">
        <GiShoppingCart />
      </span>
    </button>
  );
};

export default NavButton;
