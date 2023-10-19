import React from "react";
import images from "../../../assets/images.png";
import image2 from "../../../assets/image2.png";
import image3 from "../../../assets/image3.png";
import image4 from "../../../assets/image4.png";
import "../../../App.css";

const Header = () => {
  return (
    <section className="max-w-[85rem] m-auto">
      <div className="grid-cols-3 grid place-content-center place-items-center my-[3rem]">
        <div>
          <img src={images} alt="" className="h-[40rem]" />
        </div>
        <div className="">
          <img src={image3} alt="" className="w-[24.9375rem] h-[9.0625rem]" />
          <h2 className="text-[#484848] text-center text-[4.6rem] tracking-tight font-medium">
            ULTIMATE
          </h2>
          <h2 className="text-center text-[#484848]  text-[7.5rem] -m-[2.2rem] font-medium text-stroke">
            SALE
          </h2>
          <p className="text-center text-[#484848] font-normal text-[1.25rem] tracking-[0.125rem] pt-2">
            NEW COLLECTION
          </p>
          <div className="flex justify-center py-5">
            <button className="mx-auto px-12 py-3 bg-black text-white rounded-md ">
              Shop Now
            </button>
          </div>

          <img src={image4} alt="" className="w-[26.625rem] h-[9.375rem]" />
        </div>
        <div>
          <img src={image2} alt="" className="h-[40rem]" />
        </div>
      </div>
      {/* <Logo /> */}
    </section>
  );
};

export default Header;
