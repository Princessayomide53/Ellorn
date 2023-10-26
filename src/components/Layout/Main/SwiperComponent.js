import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Card from "../../UI/Cards";
import { CiStar } from "react-icons/ci";

const SwiperComponent = ({ items }) => {
  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={1}
        spaceBetween={16}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {/* <ul className="flex justify-center"> */}
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex justify-center mb-14">
              <Card className=" w-[18rem] h-[22rem] bg-white shadow-xl rounded-2xl px-[2rem]">
                <img
                  src={item.img}
                  alt="men's wears"
                  className=" h-[15rem]  W-[8rem]  mx-auto rounded-3xl object-contain"
                />
                <div className="flex justify-between">
                  <h1 className=" -mt-5  text-[0.75rem] text-[#484848] font-medium leading-normal">
                    {item.description}
                  </h1>
                  <div className="flex -mt-3">
                    <CiStar className=" text-sm" />
                    <CiStar className=" text-sm" />
                    <CiStar className=" text-sm" />
                  </div>
                </div>

                <p className="text-[#8A8A8A] text-[0.68rem] font-medium">
                  {item.brand}
                </p>
                <div className="flex my-4 justify-between ">
                  <p className=" text-[0.58rem] text-[#484848] font-medium">
                    {item.reviews}
                  </p>
                  <button className="px-5 rounded-2xl -m-2 text-[0.65rem] bg-[#484848] text-white ">
                    Add +
                  </button>
                </div>

                <div className="flex justify-between mt-7">
                  <h4 className=" text-[#484848] text-[0.8rem] tracking-[-0.015rem] font-medium ">
                    ${item.amount}
                  </h4>
                  {item.shouldRender && (
                    <select className="border-2 border-black cursor-pointer rounded-md lg:p-1 md:p-0">
                      <option value="s">s</option>
                      <option value="m">m</option>
                      <option value="xl">xl</option>
                      <option value="xxl">xxl</option>
                    </select>
                  )}
                </div>
              </Card>
            </div>
          </SwiperSlide>
        ))}
        {/* </ul> */}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
