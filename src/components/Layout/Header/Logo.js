import React from "react";
import Card from "../../UI/Cards";
import logo from "../../../assets/logo.png";
import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logo3.png";
import logo4 from "../../../assets/logo4.png";
import logo5 from "../../../assets/logo5.png";

const Logo = () => {
  return (
    <Card className="overflow-hidden sm:my-[3rem]  shadow-xl sm:py-[4rem] py-[2.5rem] lg:px-[1rem] md:px-[0.75rem] lg:h-[10.5rem] md:h-[7.5rem] h-[1rem] px-[0.45rem]">
      <div className="logos lg:max-w-[80rem] md:max-w-[88rem] mx-auto flex justify-around">
        <img
          src={logo}
          alt=""
          className="lg:w-[10rem] lg:h-[1.7rem] md:w-[5rem] md:h-[0.8rem] w-[2.5rem] h-[0.5rem]"
        />
        <img
          src={logo2}
          alt=""
          className="lg:w-[10rem] lg:h-[1.3rem] md:w-[7rem] md:h-[0.8rem] w-[3.5rem] h-[0.5rem]"
        />
        <img
          src={logo3}
          alt=""
          className="lg:w-[10rem] lg:h-[1.7rem] md:w-[5rem] md:h-[0.8rem] w-[2.5rem] h-[0.5rem]"
        />
        <img
          src={logo4}
          alt=""
          className="lg:w-[10rem] lg:h-[1.7rem] md:w-[5rem] md:h-[0.8rem] w-[2.5rem] h-[0.5rem]"
        />
        <img
          src={logo5}
          alt=""
          className="lg:w-[10rem] lg:h-[1.7rem] md:w-[5rem] md:h-[0.8rem] w-[2.5rem] h-[0.5rem]"
        />
      </div>
    </Card>
  );
};

export default Logo;
