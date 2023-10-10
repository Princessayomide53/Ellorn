import React from "react";
import Card from "../../../../UI/Cards";
import { CiStar } from "react-icons/ci";

const MensWear = (props) => {
  return (
    <section className="max-w-[70rem] m-auto  my-[2rem]">
      <ul className="grid grid-cols-3 gap-[5rem]  place-items-center">
        {props.wears.map((items) => (
          <Card
            key={items.id}
            className="w-[21rem] h-[24rem] bg-white shadow-2xl rounded-2xl "
          >
            <img
              src={items.img}
              alt="men's wears"
              className="w-[20rem] h-[15rem] mx-auto px-5 rounded-3xl object-contain"
            />
            <div className="flex justify-between pr-[2rem]">
              <h1 className="px-[2rem] -mt-5 text-[1.25rem] text-[#484848] font-medium leading-normal">
                {items.description}
              </h1>
              <div className="flex -mt-3">
                <CiStar className="text-xl" />
                <CiStar className="text-xl" />
                <CiStar className="text-xl" />
              </div>
            </div>

            <p className="text-[#8A8A8A] px-[2rem] text-[0.75rem] font-medium">
              {items.brand}
            </p>
            <div className="flex my-4 space-x-[1.7rem]">
              <p className="px-[2rem] text-[0.75rem] text-[#484848] font-medium">
                {items.reviews}
              </p>
              <button className="px-5 rounded-2xl -m-2 bg-[#484848] text-white ">
                Add +
              </button>
            </div>

            <div className="flex space-x-[8rem] mt-7">
              <h4 className="px-[2rem] text-[#484848] text-[1.5rem] tracking-[-0.015rem] font-medium ">
                ${items.amount}
              </h4>
              <select className="border-2 border-black cursor-pointer rounded-md">
                <option value="s">s</option>
                <option value="m">m</option>
                <option value="xl">xl</option>
                <option value="xxl">xxl</option>
              </select>
            </div>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default MensWear;
