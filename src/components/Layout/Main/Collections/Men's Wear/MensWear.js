import React from "react";
import Card from "../../../../UI/Cards";
import { CiStar } from "react-icons/ci";
import SwiperComponent from "../../SwiperComponent";

const MensWear = (props) => {
  if (window.innerWidth < 768) {
    return (
      <section className="lg:max-w-[78rem] md:max-w-[88rem] m-auto  my-[2rem]">
        <SwiperComponent items={props.wears} />
      </section>
    );
  } else {
    return (
      <section className="lg:max-w-[78rem] md:max-w-[88rem] m-auto  my-[2rem]">
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 lg:gap-[5rem] md:gap-[2.8rem] place-items-center">
          {props.wears.map((items) => (
            <Card
              key={items.id}
              className="lg:w-[21rem] md:w-[18rem] lg:h-[24rem] md:h-[22.5rem] w-[18rem] h-[22rem] bg-white shadow-xl rounded-2xl px-[2rem]"
            >
              <img
                src={items.img}
                alt="men's wears"
                className="lg:w-[20rem] h-[15rem] md:w-[15rem] W-[8rem]  mx-auto rounded-3xl object-contain"
              />
              <div className="flex justify-between">
                <h1 className=" -mt-5 lg:text-[1.25rem] md:text-[0.9rem] text-[0.75rem] text-[#484848] font-medium leading-normal">
                  {items.description}
                </h1>
                <div className="flex -mt-3">
                  <CiStar className="sm:text-xl text-sm" />
                  <CiStar className="sm:text-xl text-sm" />
                  <CiStar className="sm:text-xl text-sm" />
                </div>
              </div>

              <p className="text-[#8A8A8A]  lg:text-[0.75rem] md:text-[0.65rem] text-[0.68rem] font-medium">
                {items.brand}
              </p>
              <div className="flex my-4 justify-between ">
                <p className=" lg:text-[0.75rem] md:text-[0.5rem] text-[0.58rem] text-[#484848] font-medium">
                  {items.reviews}
                </p>
                <button className="px-5 rounded-2xl -m-2 lg:text-base md:text-[0.75rem] text-[0.65rem] bg-[#484848] text-white ">
                  Add +
                </button>
              </div>

              <div className="flex justify-between mt-7">
                <h4 className=" text-[#484848] lg:text-[1.5rem] md:text-[0.9rem] text-[0.8rem] tracking-[-0.015rem] font-medium ">
                  ${items.amount}
                </h4>
                {items.shouldRender && (
                  <select className="border-2 border-black cursor-pointer rounded-md lg:p-1 md:p-0">
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
  }
};

export default MensWear;
