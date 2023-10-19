import React from "react";
import Card from "../../UI/Cards";
import logo from "../../../assets/logo.png";
import logo2 from "../../../assets/logo2.png";
import logo3 from "../../../assets/logo3.png";
import logo4 from "../../../assets/logo4.png";
import logo5 from "../../../assets/logo5.png";

const Logo = () => {
  return (
    <Card className="my-[3rem]  shadow-xl py-[4rem] px-[3rem] h-[10.5rem]">
      <div className="max-w-[77rem] mx-auto flex justify-between">
        <img src={logo} alt="" className="w-[10rem] h-[1.7rem]" />
        <img src={logo2} alt="" className="w-[10rem] h-[1.3rem]" />
        <img src={logo3} alt="" className="w-[10rem] h-[1.7rem]" />
        <img src={logo4} alt="" className="w-[10rem] h-[1.7rem]" />
        <img src={logo5} alt="" className="w-[10rem] h-[1.7rem]" />
      </div>
    </Card>
  );
};

export default Logo;
