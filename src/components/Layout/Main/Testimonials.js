import React from "react";
import TestimonialDisplay from "./TestimonialDisplay";

const Testimonials = () => {
  return (
    <section className="bg-[#FAFAFA] sm:h-[45rem] h-[32rem] w-full mb-10">
      <div className="max-w-[80rem] m-auto">
        <h1 className="capitalize font-serif pt-[3.5rem] text-[#484848] text-center text-[1.5rem] sm:text-[2.875rem] font-normal leading-normal pb-[1.25rem]">
          this is what our customer say
        </h1>
        <p className="text-[#8A8A8A] sm:pb-[4rem] pb-[3rem] text-center sm:text-[1rem] text-[0.587rem] font-normal leading-[1.625rem]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          duis
        </p>
        <TestimonialDisplay />
      </div>
    </section>
  );
};

export default Testimonials;
