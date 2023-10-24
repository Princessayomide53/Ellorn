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
    <Card className="bg-white flex py-[2rem] m-auto 2xl:max-w-[80rem] justify-around w-full shadow-lg lg:px-[5.5rem] md:px-[2.5rem]">
      {features.map((item) => (
        <div
          className="flex space-x-3 lg:max-w-[80rem] md:max-w-[88rem]"
          key={item.id}
        >
          <img
            src={item.img}
            alt=""
            className="lg:w-[2.375rem] lg:h-[3.125rem] md:w-[1.5rem] md:h-[2.3rem]"
          />
          <p className="lg:text-[1.2rem] md:text-[0.65rem] font-medium text-[#484848] leading-normal">
            {item.title} <br />
            <span className="lg:text-[0.95rem] md:text-[0.75rem] font-normal text-[#484848] leading-[1.625rem]">
              {item.text}
            </span>
          </p>
        </div>
      ))}
    </Card>
  );
};

export default Features;
