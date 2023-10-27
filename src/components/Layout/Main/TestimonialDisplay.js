import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import Card from "../../UI/Cards";
import Test1 from "../../../assets/Test1.png";
import Test2 from "../../../assets/Test2.png";
import stars from "../../../assets/stars.png";

const testmonials = [
  {
    id: 1,
    img: Test1,
    text: "“You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!”",
  },
  {
    id: 2,
    img: Test2,
    text: "“Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”!",
  },
];

const TestimonialDisplay = () => {
  return (
    <section className="w-full h-[300px] overflow-hidden  max-w-[80rem]">
      <div className="">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          autoplay={1500}
          className="mySwiper"
        >
          {testmonials.map((data) => (
            <SwiperSlide key={data.id}>
              <Card className="w-[45rem]  h-[20rem] py-[3rem] m-auto justify-evenly flex bg-white rounded-lg">
                <img
                  src={data.img}
                  alt="pictures"
                  className="w-[13.125rem] h-[13.125rem] object-contain rounded-md"
                />
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div>
        {/* <p className="font-normal w-[20rem] text-[0.875rem] text-[#484848] pb-[1.5rem]">
          {data.text}
        </p>
        <img
          src={stars}
          alt="pictures"
          className="w-[5.937rem] h-[1.1875rem] mb-[2rem] object-cover"
        />
        <hr className="custom-hr" />
        <p className="text-[#484848] text-[2rem] font-serif font-normal leading-normal pt-5">
          James K
        </p>
        <p className="text-[#484848] text-[1rem] font-normal leading-normal">
          Traveler
        </p> */}
      </div>
      {/* </Card> */}
    </section>
  );
};

export default TestimonialDisplay;
