import React from "react";
import { GiShoppingCart } from "react-icons/gi";

const NavButton = () => {
  return (
    <button className="flex space-x-7 px-[3rem] py-[0.75rem] bg-orange-100 rounded-full -mt-2">
      Carts{" "}
      <span className="px-2 pt-1 text-2xl">
        <GiShoppingCart />
      </span>
    </button>
  );
};

export default NavButton;
