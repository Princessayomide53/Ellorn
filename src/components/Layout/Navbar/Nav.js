import React from "react";
import NavButton from "./NavButton";

const Nav = () => {
  return (
    <nav className="flex w-full mx-auto  justify-between bg-purple-200 py-5 px-24">
      <h2 className="font-semibold text-[2rem]">Ellorn</h2>
      <NavButton />
    </nav>
  );
};

export default Nav;
