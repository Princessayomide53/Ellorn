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
            className="w-[21rem] h-[24rem] bg-white shadow-xl rounded-2xl px-[2rem]"
          >
            <img
              src={items.img}
              alt="men's wears"
              className="w-[20rem] h-[15rem] mx-auto rounded-3xl object-contain"
            />
            <div className="flex justify-between">
              <h1 className=" -mt-5 text-[1.25rem] text-[#484848] font-medium leading-normal">
                {items.description}
              </h1>
              <div className="flex -mt-3">
                <CiStar className="text-xl" />
                <CiStar className="text-xl" />
                <CiStar className="text-xl" />
              </div>
            </div>

            <p className="text-[#8A8A8A]  text-[0.75rem] font-medium">
              {items.brand}
            </p>
            <div className="flex my-4 justify-between ">
              <p className=" text-[0.75rem] text-[#484848] font-medium">
                {items.reviews}
              </p>
              <button className="px-5 rounded-2xl -m-2 bg-[#484848] text-white ">
                Add +
              </button>
            </div>

            <div className="flex justify-between mt-7">
              <h4 className=" text-[#484848] text-[1.5rem] tracking-[-0.015rem] font-medium ">
                ${items.amount}
              </h4>
              {items.shouldRender && (
                <select className="border-2 border-black cursor-pointer rounded-md">
                  <option value="s">s</option>
                  <option value="m">m</option>
                  <option value="xl">xl</option>
                  <option value="xxl">xxl</option>
                </select>
              )}
            </div>
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default MensWear;
