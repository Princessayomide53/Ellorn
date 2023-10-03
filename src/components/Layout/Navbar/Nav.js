import React from "react";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <nav className="flex w-full justify-between  py-[0.5rem] px-24 shadow-xl sticky">
      <h2 className="font-semibold text-[2.7rem]">Ellorn</h2>
      <ul className="space-x-12 flex text-[1.2rem] text-[#484848] font-normal mt-7">
        <li>New Arrivals</li>
        <li>Orders</li>
        <NavButton />
      </ul>
    </nav>
  );
};

export default Nav;
