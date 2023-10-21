import React from "react";
import footer1 from "../../../assets/footer1.png";
import footer2 from "../../../assets/footer2.png";
import Card from "../../UI/Cards";
// import MiniFooter from "./MiniFooter";

const Footer = () => {
  return (
    <section className="lg:max-w-[80rem] md:max-w-[88rem] m-auto">
      <footer className="flex between mb-[3rem]">
        <img
          src={footer1}
          alt=""
          className="lg:w-[21.1875rem] lg:h-[46.6875rem] md:w-[13.5rem] md:h-[35rem]"
        />
        <Card className="lg:w-[39.4375rem] lg:h-[20.8125rem] md:w-[28rem] md:h-[15rem]  m-auto p-[1rem]">
          <h3 className="text-[#484848] pb-[1.25rem] text-center lg:text-[2.475rem] md:text-[1.5rem] font-normal leading-normal capitalize">
            Subscribe to our newsletter
          </h3>
          <p className="text-[#8A8A8A] text-center leading-[1.625rem] lg:text-[0.9rem] md:text-[0.65rem] font-normal pb-[1.8rem]">
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
              className="w-full rounded-md shadow-2xl h-[3.5rem] pl-5 border-b-2 border-[#484848] focus:outline-blue-400"
              placeholder="Micheal@email.com"
            />
          </div>
          <div className="flex justify-center">
            <button className=" bg-black text-white rounded-lg h-[3.5rem] w-[12.9375rem] transition duration-300 py-[0.625rem]">
              Subscribe
            </button>
          </div>
        </Card>
        <img
          src={footer2}
          alt=""
          className="lg:w-[20.0625rem] md:w-[13.5rem] md:h-[35rem] lg:h-[46.6875rem]"
        />
      </footer>
    </section>
  );
};

export default Footer;
