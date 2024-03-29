import React from "react";
import Timer from "./Timer";
import Items from "./Items";

const Main = () => {
  return (
    <main className="background w-full h-full">
      <div className="lg:max-w-[60rem] xl:max-w-[78rem] md:max-w-[88rem] m-auto py-[3.5rem] max-w-[90rem]  flex lg:justify-around mac:space-x-[17rem] xl:space-x-[8.5rem] md:justify-around flex-col justify-center items-center space-y-[3rem] sm:flex-row">
        <div className="text-left">
          <h1 className="text-[#484848] lg:text-[2.4rem] xl:text-[2.85rem] md:text-[1.8rem] text-[1.9rem] font-medium">
            Deals of the Month
          </h1>
          <p className="text-[#8A8A8A] lg:text-[1rem] md:text-[0.75rem] text-[0.65rem] font-normal leading-[1.675rem] py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Scelerisque duis ultrices sollicitudin aliquam sem.
            <br /> Scelerisque duis ultrices sollicitudin.
            <br /> Scelerisque duis ultrices sollicitudin aliquam sem.
          </p>
          <button className="bg-black text-white lg:text-[1rem] md:text-[0.75rem] px-7 py-2 text-[0.65rem] rounded-md sm:px-10 sm:py-3 my-3">
            Buy Now
          </button>
          <h2 className="text-[#484848] lg:text-[1.75rem] md:text-[0.875rem] text-[0.65rem] font-medium py-4">
            Hurry, Before Its Too Late
          </h2>
          <Timer />
        </div>
        <Items />
      </div>
    </main>
  );
};

export default Main;
