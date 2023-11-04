import React from "react";
import TestimonialDisplay from "./TestimonialDisplay";

const Testimonials = () => {
  return (
    <section className="bg-[#FAFAFA] sm:h-[45rem] h-[26rem] w-full md:mb-10 my-24">
      <div className="max-w-[80rem] m-auto">
        <h1 className="capitalize font-serif px-[0.5rem] md:px-0 md:pt-[3.5rem] pt-[1.5rem] text-[#484848] text-center text-[1.5rem] sm:text-[2.875rem] font-normal leading-normal pb-[1.25rem]">
          this is what our customer says about us.
        </h1>
        <p className="text-[#8A8A8A] sm:pb-[4rem] px-[0.5rem] md:px-0 md:pb-[3rem] pb-[1.8rem] text-center sm:text-[1rem] text-[0.687rem] font-normal leading-[1.625rem]">
          As a testament to our commitment to excellence, here's what our
          satisfied customers have to say about us.
        </p>
        <TestimonialDisplay />
      </div>
    </section>
  );
};

export default Testimonials;
