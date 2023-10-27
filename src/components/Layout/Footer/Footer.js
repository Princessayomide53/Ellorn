import React from "react";
import footer1 from "../../../assets/footer1.png";
import footer2 from "../../../assets/footer2.png";
import Card from "../../UI/Cards";
// import MiniFooter from "./MiniFooter";

const Footer = () => {
  return (
    <section className="lg:max-w-[63rem] xl:max-w-[80rem] md:max-w-[88rem] max-w-[90rem] m-auto px-[1rem] md:px-[1rem] lg:px-0">
      <footer className="flex between mb-[3rem]">
        <img
          src={footer1}
          alt=""
          className="lg:w-[21.1875rem] lg:h-[46.6875rem] md:w-[11.5rem] md:h-[32rem] w-[6rem] h-[12rem]"
        />
        <Card className="lg:w-[35rem] xl:w-[39.4375rem] lg:h-[20.8125rem] md:w-[25rem] md:h-[15rem] w-[12rem] h-[13rem]  m-auto sm:p-[1rem] p-[0.45rem]">
          <h3 className="text-[#484848] pb-[1.25rem] text-center lg:text-[1.4rem] xl:text-[2.475rem] md:text-[1.342rem] text-[0.65rem] font-normal leading-normal capitalize">
            Subscribe to our newsletter
          </h3>
          <p className="text-[#8A8A8A] text-center sm:leading-[1.625rem] lg:text-[0.85rem] xl:text-[0.9rem] md:text-[0.7rem] text-[0.4rem] font-normal pb-[0.75rem] sm:pb-[1.8rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
            duis
            <br /> ultrices sollicitudin aliquam sem. Scelerisque duis ultrices
            sollicitudin
          </p>
          <div
            className="px-5 pb-[1.88rem]
            "
          >
            <input
              type="text"
              className="w-full rounded-md shadow-2xl sm:h-[3.5rem] sm:pl-5 pl-2 sm:placeholder:text-[1.2rem] py-1 placeholder:text-[0.4rem] border-b-2 border-[#484848] focus:outline-blue-400"
              placeholder="Micheal@email.com"
            />
          </div>
          <div className="flex justify-center">
            <button className=" bg-black text-white rounded-lg sm:h-[3.5rem] sm:w-[12.9375rem] px-5 sm:text-[1rem] text-[0.55rem] py-2 transition duration-300 sm:py-[0.625rem]">
              Subscribe
            </button>
          </div>
        </Card>
        <img
          src={footer2}
          alt=""
          className="lg:w-[20.0625rem] md:w-[11.5rem] md:h-[32rem] lg:h-[46.6875rem] w-[5.5rem] h-[12rem]"
        />
      </footer>
    </section>
  );
};

export default Footer;
