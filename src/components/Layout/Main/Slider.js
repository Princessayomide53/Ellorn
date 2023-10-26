import React from "react";
import slider from "../../../assets/slider.png";
import image from "../../../assets/image.png";

const Slider = () => {
  return (
    <section className="mt-[6rem] relative 2xl:max-w-[80rem] max-w-[90rem] m-auto">
      {" "}
      <div className="m-auto">
        {" "}
        <img
          src={slider}
          alt=""
          className="w-full lg:h-[32rem] md:h-[25rem] lg:flex-shrink-0 h-[14rem]"
        />
        {/* <div className="flex justify-evenly z-10"> */}{" "}
        <img
          src={image}
          alt=""
          className="lg:w-[37rem] lg:h-[32rem] md:w-[22rem] md:h-[25rem] w-[12rem] h-[14rem] left-3 absolute -top-0 lg:left-[7rem] md:left-[3.155rem] flex-shrink-0"
        />
        <div className="absolute -top-0 sm:py-10 lg:right-[7rem] md:right-[2.8rem] right-4 py-5 sm:space-y-[1.25rem] space-y-[0.7rem]">
          <p className="text-[#767676] lg:text-[1rem] md:text-[0.75rem] text-[0.6rem] font-normal">
            Women Collection
          </p>
          <h4 className="text-[#484848] font-serif  font-bold lg:text-[2.875rem] md:text-[1.5rem] text-[0.75rem] leading-normal">
            Peaky Blinders
          </h4>
          <p className="text-[#000] sm:text-[1rem] text-[0.6rem] underline uppercase leading-normal">
            description
          </p>
          <p className="text-[#767676] lg:text-[0.95rem] w-[150px] md:w-0 md:text-[0.57rem] text-[0.3rem] flex flex-wrap md:flex-none md:flex-nowrap font-normal leading-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br /> Scelerisque duis ultrices sollicitudin aliquam sem.
            Scelerisque
            <br /> duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
            consectetur
            <br /> adipiscing elit. Scelerisque duis.
          </p>
          <p className="text-[#767676] lg:text-[1rem] md:text-[0.85rem] text-[0.5rem] font-normal leading-normal">
            size:{" "}
            <span className="bg-black sm:px-5 sm:py-1 px-2 py-[2px] text-white rounded-2xl m-2">
              M
            </span>
          </p>
          <p className="text-[#000] lg:text-[1.5rem] md:text-[0.85rem] text-[0.55rem] font-medium leading-normal">
            $100.00
          </p>
          <button className="bg-black lg:px-12 lg:py-3 md:px-6 md:py-2 md:text-[0.75rem] lg:text-[1rem] text-[0.6rem] px-4 py-1 text-white rounded-xl">
            Buy Now
          </button>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Slider;
