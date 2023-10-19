import React from "react";

const MiniFooter = () => {
  return (
    <section className="border-t-2 border-[#DEDFE1] pt-[1.88rem]">
      <div className="max-w-[80rem] m-auto">
        <div className="flex justify-between pb-[3.12rem]">
          <h2 className="text-[#484848] font-serif text-[2rem] font-normal">
            Ellorn
          </h2>
          <div className="flex space-x-[3rem]">
            <p>support center</p>
            <p>invoicing</p>
            <p>Careers</p>
            <p>Blog</p>
            <p>FaQs</p>
          </div>
        </div>
        <p className="text-[#484848] text-center text-[0.75rem] leading-[1.625rem] font-normal">
          Copyright © 2022 FASCO . All Rights Reseved.
        </p>
      </div>
    </section>
  );
};

export default MiniFooter;
