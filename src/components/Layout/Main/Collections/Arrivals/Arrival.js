import React, { useState } from "react";
import Men from "../Men's Wear/Men";
import Women from "../Women's Wear/Women";
// import WmsAccessories from "../Women's Accessories/WmsAccessories";
import Wms from "../Women's Accessories/Wms";
import MenAccessories from "../Men's Accessories/MenAccessories";

const Arrival = () => {
  const [tab, setTab] = useState(1);

  const handleTab = (tabs) => {
    setTab(tabs);
  };
  return (
    <div className="">
      <h2 className="text-[#484848] lg:text-[2.85rem] md:text-[2rem] text-[1rem] text-center font-normal pt-[4rem] ">
        New Arrivals
      </h2>
      <p className="text-[#8A8A8A] lg:text-[1rem] md:text-[0.7rem] text-[0.5rem] text-center font-normal sm:leading-[1.85rem] leading-normal py-[0.5rem] mb-[2rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis
        <br /> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin{" "}
      </p>
      <div className="lg:max-w-[60rem] xl:max-w-[80rem] md:max-w-[88rem] m-auto max-w-[90rem]">
        <ul className="flex lg:justify-around md:justify-evenly justify-evenly">
          <li
            onClick={() => {
              handleTab(1);
            }}
            className={
              tab === 1
                ? "active bg-black rounded-lg lg:px-8 md:px-5 py-2 cursor-pointer lg:text-[1rem] md:text-[0.65rem] text-[0.4rem] text-white px-3"
                : "bg-[#FAFAFA] text-[#8A8A8A] lg:px-8 md:px-5 py-2 lg:text-[1rem] md:text-[0.65rem] rounded-lg cursor-pointer text-[0.4rem] px-3"
            }
            // style={{ marginRight: "5rem" }}
          >
            Men's Fashion
          </li>

          <li
            onClick={() => {
              handleTab(2);
            }}
            className={
              tab === 2
                ? "active bg-black rounded-lg lg:px-8 md:px-5 py-2 lg:text-[1rem] md:text-[0.65rem] cursor-pointer text-white text-[0.4rem] px-3"
                : "bg-[#FAFAFA] text-[#8A8A8A] lg:px-8 md:px-5 py-2 lg:text-[1rem] md:text-[0.65rem] rounded-lg cursor-pointer text-[0.4rem] px-3"
            }
            // style={{ marginRight: "5rem" }}
          >
            Women's Fashion
          </li>

          <li
            onClick={() => {
              handleTab(3);
            }}
            className={
              tab === 3
                ? "active bg-black rounded-lg lg:px-8 md:px-5 py-2 cursor-pointer lg:text-[1rem] md:text-[0.65rem] text-white text-[0.4rem] px-3"
                : "bg-[#FAFAFA] text-[#8A8A8A] lg:px-8 md:px-5 py-2 lg:text-[1rem] md:text-[0.65rem] rounded-lg cursor-pointer text-[0.4rem] px-3"
            }
          >
            Women's Accessories
          </li>

          <li
            onClick={() => {
              handleTab(4);
            }}
            className={
              tab === 4
                ? "active bg-black rounded-lg lg:px-8 md:px-5 py-2 cursor-pointer lg:text-[1rem] md:text-[0.65rem] text-white text-[0.4rem] px-3"
                : "bg-[#FAFAFA] text-[#8A8A8A] lg:px-8 md:px-5 py-2 rounded-lg lg:text-[1rem] md:text-[0.65rem] cursor-pointer text-[0.4rem] px-3"
            }
          >
            Men's Accessories
          </li>
        </ul>

        <div>
          {tab === 1 && <Men />}
          {tab === 2 && <Women />}
          {tab === 3 && <Wms />}
          {tab === 4 && <MenAccessories />}
        </div>
      </div>
    </div>
  );
};

export default Arrival;
