import React from "react";
import slider from "../../../assets/slider.png";
import image from "../../../assets/image.png";

const Slider = () => {
  return (
    <section className="mt-[6rem] relative 2xl:max-w-[80rem] m-auto">
      <img src={slider} alt="" className="w-full h-[32rem]" />
      {/* <div className="flex justify-evenly z-10"> */}
      <img
        src={image}
        alt=""
        className="w-[37rem] h-[32rem] absolute -top-0 left-[7rem]"
      />
      <div className="absolute -top-0 py-10 right-[7rem]  space-y-[1.25rem]">
        <p className="text-[#767676] text-[1rem] font-normal">
          Women Collection
        </p>
        <h4 className="text-[#484848] font-serif  font-bold text-[2.875rem] leading-normal">
          Peaky Blinders
        </h4>
        <p className="text-[#000] text-[1rem] underline uppercase leading-normal">
          description
        </p>
        <p className="text-[#767676] text-[0.95rem] font-normal leading-normal">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque
          <br /> duis ultrices sollicitudin. Lorem ipsum dolor sit amet,
          consectetur
          <br /> adipiscing elit. Scelerisque duis.
        </p>
        <p className="text-[#767676] text-[1rem] font-normal leading-normal">
          size:{" "}
          <span className="bg-black px-5 py-1 text-white rounded-2xl m-2">
            M
          </span>
        </p>
        <p className="text-[#000] text-[1.5rem] font-medium leading-normal">
          $100.00
        </p>
        <button className="bg-black px-12 py-3 text-white rounded-xl">
          Buy Now
        </button>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Slider;
