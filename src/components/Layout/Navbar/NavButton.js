import React from "react";
import { GiShoppingCart } from "react-icons/gi";

const NavButton = () => {
  return (
    <ul className="space-x-12 flex text-[1.2rem] text-[#484848] ">
      {/* <li>Home</li> */}
      <li>Orders</li>
      <li className="flex space-x-7">
        Carts{" "}
        <span className="px-2 pt-1 text-2xl">
          <GiShoppingCart />
        </span>
      </li>
    </ul>
  );
};

export default NavButton;
