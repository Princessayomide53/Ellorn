import React from "react";
import Card from "../../UI/Cards";
import logo from "../../../assets/logo.png";
import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logo3.png";
import logo4 from "../../../assets/logo4.png";
import logo5 from "../../../assets/logo5.png";

const Logo = () => {
  return (
    <Card className="my-[3rem]  shadow-xl py-[4rem] px-[3rem] lg:h-[10.5rem] md:h-[7.5rem]">
      <div className="lg:max-w-[77rem] md:max-w-[87rem] mx-auto flex justify-between">
        <img
          src={logo}
          alt=""
          className="lg:w-[10rem] lg:h-[1.7rem] md:w-[5rem] md:h-[0.8rem]"
        />
        <img
          src={logo2}
          alt=""
          className="lg:w-[10rem] lg:h-[1.3rem] md:w-[7rem] md:h-[0.8rem]"
        />
        <img
          src={logo3}
          alt=""
          className="lg:w-[10rem] lg:h-[1.7rem] md:w-[5rem] md:h-[0.8rem]"
        />
        <img
          src={logo4}
          alt=""
          className="lg:w-[10rem] lg:h-[1.7rem] md:w-[5rem] md:h-[0.8rem]"
        />
        <img
          src={logo5}
          alt=""
          className="lg:w-[10rem] lg:h-[1.7rem] md:w-[5rem] md:h-[0.8rem]"
        />
      </div>
    </Card>
  );
};

export default Logo;
