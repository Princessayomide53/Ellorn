import React, { useState, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import Card from "../../UI/Cards";
import { CiStar } from "react-icons/ci";
import CartContext from "../../../store/cart-context";

const SwiperComponent = ({ items }) => {
  const cartItemCtx = useContext(CartContext);
  const addToCartHandler = (item) => {
    cartItemCtx.addCart({
      id: item.id,
      img: item.img,
      description: item.description,
      amount: item.amount,
      shouldRender: item.shouldRender,
      quantity: 1,
    });
  };

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
              <Card className=" w-[18rem] h-[22.5rem] bg-white shadow-xl rounded-2xl px-[2rem]">
                <img
                  src={item.img}
                  loading="lazy"
                  alt="men's wears"
                  className=" h-[15rem]  W-[8rem]  mx-auto rounded-3xl object-contain"
                />
                <div className="flex justify-between">
                  <h1 className=" -mt-6  text-[0.75rem] text-[#484848] font-medium leading-normal">
                    {item.description}
                  </h1>
                  <div className="flex -mt-4">
                    <CiStar className=" text-sm" />
                    <CiStar className=" text-sm" />
                    <CiStar className=" text-sm" />
                  </div>
                </div>

                <p className="text-[#8A8A8A] text-[0.68rem] font-medium">
                  {item.brand}
                </p>
                <div className="flex my-4 justify-between">
                  <p className=" text-[0.58rem] text-[#484848] font-medium">
                    {item.reviews}
                  </p>
                  <button
                    onClick={() => {
                      addToCartHandler(item);
                    }}
                    className="px-5 rounded-2xl -m-2 text-[0.65rem] bg-[#484848] text-white "
                  >
                    Add +
                  </button>
                </div>

                <div className="flex justify-between mt-8">
                  <h4 className=" text-[#484848] text-[0.85rem] tracking-[-0.015rem] font-medium ">
                    ${item.amount}
                  </h4>
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
