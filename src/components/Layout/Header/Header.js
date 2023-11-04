import React from "react";
import images from "../../../assets/images.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";
import "../../../App.css";

const Header = () => {
  return (
    <section className="lg:max-w-[80rem] md:max-w-[88rem] max-w-[90rem] m-auto">
      <div className="grid-cols-3 grid place-content-center place-items-center sm:my-[3rem] my-[1rem] mt-[5rem] sm:mt-[7.8rem]">
        <div className="">
          <img
            src={images}
            alt=""
            className="xl:h-[47rem] xl:w-[24.5rem] lg:h-[44rem] lg:w-[18rem] md:w-[12rem] md:h-[26.5rem] w-[6.5rem] h-[18rem]"
          />
        </div>
        <div className="flex justify-center flex-col items-center">
          <img
            src={image3}
            alt=""
            className="lg:w-[24.9375rem] lg:h-[9.0625rem] md:w-[15rem] md:h-[5rem] w-[7.5rem] h-[3rem]"
          />
          <h2 className="text-[#484848] text-center lg:text-[5.5rem] xl:text-[5.6875rem] md:text-[2.8875rem] text-[1.9rem] tracking-tight font-medium">
            ULTIMATE
          </h2>
          <h2 className="text-center text-[#484848] lg:text-[9.5rem] xl:text-[11.2875rem] md:text-[5.6875rem] text-[3.5rem] sm:-m-[2.2rem] -m-[0.55rem] font-medium text-stroke">
            SALE
          </h2>
          <p className="text-center text-[#484848] font-normal md:text-[0.85rem] md:mt-3 lg:mt-0 lg:text-[1.25rem] text-[0.65rem] tracking-[0.125rem]">
            NEW COLLECTION
          </p>
          <div className="flex justify-center py-4">
            <button className="mx-auto sm:px-12 sm:py-3 px-7 py-2 bg-black text-white rounded-md sm:text-[1rem] text-[0.55rem]">
              Shop Now
            </button>
          </div>

          <img
            src={image4}
            alt=""
            className="lg:w-[26.625rem] lg:h-[9.375rem]"
          />
        </div>
        <div>
          <img
            src={image2}
            alt=""
            className="xl:h-[47rem] xl:w-[24.5rem] lg:h-[44rem] lg:w-[18rem] md:w-[12rem] md:h-[26.5rem] w-[6.5rem] h-[18rem]"
          />
        </div>
      </div>
      {/* <Logo /> */}
    </section>
  );
};

export default Header;
