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
      <h2 className="text-[#484848] text-[2.85rem] text-center font-normal pt-[4rem] ">
        New Arrivals
      </h2>
      <p className="text-[#8A8A8A] text-[1rem] text-center font-normal leading-[1.85rem] py-[0.5rem] mb-[2rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis
        <br /> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin{" "}
      </p>
      <div className=" max-w-[80rem] m-auto">
        <ul className="flex justify-around">
          <li
            onClick={() => {
              handleTab(1);
            }}
            className={
              tab === 1
                ? "active bg-black rounded-lg px-8 py-2 cursor-pointer text-[1rem] text-white"
                : "bg-[#FAFAFA] text-[#8A8A8A] px-8 py-2 rounded-lg cursor-pointer"
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
                ? "active bg-black rounded-lg px-8 py-2 cursor-pointer text-[1rem] text-white"
                : "bg-[#FAFAFA] text-[#8A8A8A] px-8 py-2 rounded-lg cursor-pointer"
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
                ? "active bg-black rounded-lg px-8 py-2 cursor-pointer text-[1rem] text-white"
                : "bg-[#FAFAFA] text-[#8A8A8A] px-8 py-2 rounded-lg cursor-pointer"
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
                ? "active bg-black rounded-lg px-8 py-2 cursor-pointer text-[1rem] text-white"
                : "bg-[#FAFAFA] text-[#8A8A8A] px-8 py-2 rounded-lg cursor-pointer"
            }
          >
            Men's Accessories
          </li>
        </ul>

        <div>
          {tab === 1 && <Men />}
          {tab === 2 && <Women />}
          {tab === 3 ? <Wms /> : ""}
          {tab === 4 ? <MenAccessories /> : ""}
        </div>
      </div>
    </div>
  );
};

export default Arrival;
