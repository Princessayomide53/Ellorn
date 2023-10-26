import React from "react";
import Socials2 from "./Socials2";

const Socials = () => {
  return (
    <section className="sm:my-[6rem] my-[4rem]">
      <h2 className="text-center text-[#484848] lg:text-[2.875rem] text-[1.3rem] md:text-[2.165rem]  font-normal font-serif pb-[1.2rem]">
        Follow us on Instagram
      </h2>
      <p className="text-center text-[#8A8A8A] text-[0.5rem] lg:text-[1rem]  md:text-[0.85rem] font-normal sm:leading-[1.65rem] sm:pb-[4.5rem] pb-[2rem]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        duis
        <br /> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
        sollicitudin{" "}
      </p>
      <Socials2 />
    </section>
  );
};

export default Socials;
