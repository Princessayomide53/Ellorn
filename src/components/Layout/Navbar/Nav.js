import React from "react";
import NavButton from "./NavButton";

const Nav = (props) => {
  return (
    <nav className="fixed top-0 z-10 bg-white w-full  py-[0.5rem] xl:px-24 lg:px-16 px-3 shadow-md md:px-8">
      <div className="flex justify-between">
        <h2 className="font-semibold sm:text-[3.25rem] text-[1.46rem] font-serif text-[#484848]">
          Ellorn
        </h2>
        <ul className="sm:space-x-12 space-x-5 flex sm:text-[1.2rem] text-[0.65rem] text-[#484848] pt-4 font-normal sm:pt-7">
          <li>New Arrivals</li>
          <li>Orders</li>
          <li className="-mt-2 sm:-mt-0">
            <NavButton onClick={props.onShowCart} />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
