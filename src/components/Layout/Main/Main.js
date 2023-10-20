import React from "react";
import Timer from "./Timer";
import Items from "./Items";

const Main = () => {
  return (
    <main className="background w-full h-full">
      <div className="lg:max-w-[78rem] md:max-w-[88rem] m-auto py-[3.5rem] md:justify-center flex lg:space-x-[17rem] md:space-x-[3rem]">
        <div>
          <h1 className="text-[#484848] lg:text-[2.85rem] md:text-[1.5rem] font-medium">
            Deals of the Month
          </h1>
          <p className="text-[#8A8A8A] lg:text-[1rem] md:text-[0.75rem] font-normal leading-[1.675rem] py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Scelerisque duis ultrices sollicitudin aliquam sem.
            <br /> Scelerisque duis ultrices sollicitudin.
            <br /> Scelerisque duis ultrices sollicitudin aliquam sem.
          </p>
          <button className="bg-black text-white lg:text-[1rem] md:text-[0.75rem] rounded-md px-10 py-3 my-3">
            Buy Now
          </button>
          <h2 className="text-[#484848] lg:text-[1.75rem] md:text-[0.875rem] font-medium py-4">
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
