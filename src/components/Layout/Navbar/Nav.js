import React from "react";
import NavButton from "./NavButton";
import { motion } from "framer-motion";

const Nav = (props) => {
  return (
    <nav className="fixed top-0 z-30 bg-white w-full py-[0.5rem] mac:px-20 xl:px-8 lg:px-16 px-4 shadow-md md:px-8">
      <div className="flex justify-between">
        <motion.h2
          initial={{ y: -120, opacity: 0 }}
          animate={{ y: 0, opacity: 0.9 }}
          transition={{
            type: "spring",
            delay: 0.2,
            duration: 2,
          }}
          className="font-semibold sm:text-[3.25rem] text-[1.46rem] font-serif text-[#484848]"
        >
          Ellorn
        </motion.h2>
        <ul className="sm:space-x-12 space-x-5 flex sm:text-[1.2rem] text-[0.65rem] text-[#484848] pt-3 font-normal sm:pt-7">
          <motion.li
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              duration: 2,
            }}
          >
            New Arrivals
          </motion.li>
          <motion.li
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              duration: 2,
            }}
          >
            Orders
          </motion.li>
          <motion.li
            initial={{ y: -120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              delay: 0.2,
              duration: 2,
            }}
            className="-mt-2 sm:-mt-0"
          >
            <NavButton onClick={props.onShowCart} />
          </motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
