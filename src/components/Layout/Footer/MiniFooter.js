import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { FiFacebook } from "react-icons/fi";

const MiniFooter = () => {
  return (
    <section className="border-t-2 border-[#DEDFE1] pt-[1.88rem] bg-black">
      <div className="lg:max-w-[60rem] xl:max-w-[80rem] md:max-w-[80rem] m-auto max-w-[90rem] sm:px-0 px-[1.2rem]">
        <div className="grid md:grid-cols-4 grid-cols-2 place-content-center place-items-center">
          <div className="py-[2rem]">
            <h2 className=" font-serif lg:text-[2rem] md:text-[1.7rem] text-[2.5rem] font-normal  text-white pb-[1.5rem]">
              Ellorn
            </h2>
            <p className="text-white pb-[1.5rem] lg:text-[1.5rem] text-[0.9rem] font-medium ">
              Subscribe
            </p>
            <p className="text-white pb-[1.5rem] lg:text-[1rem] font-normal text-[0.65rem]">
              Get 10% off your first Order
            </p>
          </div>
          <div className="py-[2rem]">
            <p className="text-white pb-[1.5rem] lg:text-[1.25rem] text-[0.9rem] font-medium">
              Support
            </p>
            <p className="text-white pb-[1.5rem] lg:text-[1rem] font-normal text-[0.65rem]">
              88, Lekki Phase II,
              <br /> Off Victoria Island
            </p>
            <p className="text-white pb-[1.5rem] lg:text-[1rem] font-normal text-[0.65rem]">
              ellorn@gmail.com
            </p>
            <p className="text-white pb-[1.5rem] lg:text-[1rem] font-normal text-[0.65rem]">
              +23480-8888-9999
            </p>
          </div>
          <div className="py-[2rem]">
            <p className="text-white pb-[1.5rem] lg:text-[1.25rem] text-[0.9rem] font-medium">
              My Account
            </p>
            <p className="text-white pb-[1.5rem] lg:text-[1rem] font-normal text-[0.65rem]">
              Cart
            </p>
            <p className="text-white pb-[1.5rem] lg:text-[1rem] font-normal text-[0.65rem]">
              Shop
            </p>
            <p className="text-white pb-[1.5rem] lg:text-[1rem] font-normal text-[0.65rem]">
              Orders
            </p>
            <div className="flex space-x-4 text-white lg:text-[1rem]  text-[0.65rem]">
              <FiFacebook />
              <AiOutlineInstagram />
              <RxTwitterLogo />
            </div>
          </div>
          <div className="py-[2rem]">
            <p className="text-white pb-[1.5rem] lg:text-[1.25rem] text-[0.9rem] font-medium">
              Quick link
            </p>
            <p className="text-white pb-[1.5rem] lg:text-[1rem] font-normal text-[0.65rem]">
              Privacy Policy
            </p>
            <p className="text-white pb-[1.5rem] lg:text-[1rem] font-normal text-[0.65rem]">
              FAQ
            </p>
            <p className="text-white pb-[1.5rem] lg:text-[1rem] font-normal text-[0.65rem]">
              Contact
            </p>
            <p className="text-white pb-[1.5rem] lg:text-[1rem] font-normal text-[0.65rem]">
              Terms of Use
            </p>
          </div>
        </div>
        <p className="text-white text-center sm:text-[0.75rem] text-[0.5rem] leading-[1.625rem] font-normal">
          Copyright © 2022 FASCO . All Rights Reseved.
        </p>
      </div>
    </section>
  );
};

export default MiniFooter;
