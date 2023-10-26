import React from "react";

const MiniFooter = () => {
  return (
    <section className="border-t-2 border-[#DEDFE1] pt-[1.88rem]">
      <div className="lg:max-w-[80rem] md:max-w-[88rem] m-auto max-w-[90rem] sm:px-0 px-[1.2rem]">
        <div className="flex lg:justify-between md:justify-around justify-between pb-[3.12rem]">
          <h2 className="text-[#484848] font-serif lg:text-[2rem] md:text-[1.2rem] text-[2rem] font-normal">
            Ellorn
          </h2>
          <div className="flex lg:items-end  sm:flex-row  sm:space-x-[3rem] flex-col space-y-[2rem]">
            <p className="sm:text-[1rem] text-[0.65rem]">support center</p>
            <p className="sm:text-[1rem] text-[0.65rem]">invoicing</p>
            <p className="sm:text-[1rem] text-[0.65rem]">Careers</p>
            <p className="sm:text-[1rem] text-[0.65rem]">Blog</p>
            <p className="sm:text-[1rem] text-[0.65rem]">FaQs</p>
          </div>
        </div>
        <p className="text-[#484848] text-center sm:text-[0.75rem] text-[0.5rem] leading-[1.625rem] font-normal">
          Copyright © 2022 FASCO . All Rights Reseved.
        </p>
      </div>
    </section>
  );
};

export default MiniFooter;
