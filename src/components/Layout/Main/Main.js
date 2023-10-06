import React from "react";

const Main = () => {
  return (
    <section className="background w-full h-full">
      <div className="max-w-[75rem] m-auto py-[7rem]">
        <h1 className="text-[#484848] text-[2.85rem] font-normal">
          Deals of the Month
        </h1>
        <p className="text-[#8A8A8A] text-[1rem] font-normal leading-[1.675rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
          Scelerisque duis ultrices sollicitudin aliquam sem.
          <br /> Scelerisque duis ultrices sollicitudin{" "}
        </p>
        <button className="bg-black text-white text-[1rem] rounded-md px-10 py-3">
          Buy Now
        </button>
      </div>
    </section>
  );
};

export default Main;
