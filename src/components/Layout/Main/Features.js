import React from "react";
import Card from "../../UI/Cards";
import icon from "../../../assets/icon.png";
import icon2 from "../../../assets/icon2.png";
import Vector3 from "../../../assets/Vector3.png";
import icon4 from "../../../assets/icon4.png";

const features = [
  {
    id: 1,
    img: icon,
    title: "High quality",
    text: "Crafted from High Quality",
  },
  {
    id: 2,
    img: icon2,
    title: "Warranty Protection",
    text: "Over 2 years",
  },
  {
    id: 3,
    img: Vector3,
    title: "Free Shipping",
    text: "Order over 150 $",
  },
  {
    id: 4,
    img: icon4,
    title: "24 / 7 Support",
    text: "Dedicated Support",
  },
];

const Features = () => {
  return (
    <Card className="bg-white flex sm:py-[2rem] py-[1rem] m-auto 2xl:max-w-[80rem] justify-around w-full shadow-lg xl:px-[5.5rem] md:px-[2.5rem] px-[1rem]">
      {features.map((item) => (
        <div
          className="flex sm:space-x-3 space-x-2  lg:max-w-[80rem] md:max-w-[88rem] max-w-[90rem]"
          key={item.id}
        >
          <img
            src={item.img}
            alt=""
            className="lg:w-[2.375rem] lg:h-[3.125rem] md:w-[1.5rem] md:h-[2.3rem] w-[0.75rem] h-[0.85rem]"
          />
          <p className="lg:text-[1.2rem] md:text-[0.65rem] text-[0.45rem] font-medium text-[#484848] leading-normal">
            {item.title} <br />
            <span className="lg:text-[0.95rem] md:text-[0.75rem] text-[0.35rem] font-normal text-[#484848] sm:leading-[1.625rem] pt-3 sm:pt-0">
              {item.text}
            </span>
          </p>
        </div>
      ))}
    </Card>
  );
};

export default Features;
