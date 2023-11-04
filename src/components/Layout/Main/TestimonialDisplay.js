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
    description:
      "“You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!”",
    name: "James K",
    occupation: "Traveler",
  },
  {
    id: 2,
    img: Test1,
    description:
      "“You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!”",
    name: "Maccaulay LH",
    occupation: "Web Developer",
  },
  {
    id: 3,
    img: Test2,
    description:
      "“Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”!",
    name: "Karen W",
    occupation: "Content-Creator",
  },
];

const TestimonialDisplay = () => {
  return (
    <section className="w-full h-[300px] overflow-hidden max-w-[60rem] sm:max-w-[80rem]">
      <div className="swiper-container">
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards]}
          className="mySwiper lg:w-[45rem] md:w-[35rem] bg-blend-color sm:h-[25rem] h-[12rem]  rounded-lg w-[18rem]"
        >
          {testmonials.map((data) => (
            <SwiperSlide key={data.id} className="bg-white">
              <div className="">
                <Card className="lg:w-[45rem] w-[18rem] sm:h-[25rem] h-[15rem] md:w-[35rem] lg:py-[3rem] md:py-[2.5rem] py-[2.5rem] m-auto justify-evenly flex bg-white rounded-lg">
                  <img
                    src={data.img}
                    alt="pictures"
                    className="lg:w-[13.125rem] md:w-[10.5rem] w-[5rem] h-[5.5rem]  sm:h-[13.125rem] object-contain rounded-md"
                  />

                  <div>
                    <p className="font-normal sm:w-[20rem] w-[7rem] text-[0.45rem] lg:text-[0.875rem] md:text-[0.75rem] text-[#484848] lg:pb-[1.5rem] md:pb-[0.8rem] md:pt-5 lg:pt-0">
                      {data.description}
                    </p>
                    <img
                      src={stars}
                      alt="pictures"
                      className="w-[5.937rem]  md:h-[1.1875rem] h-[0.8777rem] md:mb-[2rem] mb-[0.85rem] mt-3 sm:mt-0 object-cover"
                    />
                    <hr className="custom-hr" />
                    <p className="text-[#484848] md:text-[2rem] text-[0.78rem] font-serif font-normal leading-normal md:pt-5 pt-3">
                      {data.name}
                    </p>
                    <p className="text-[#484848] md:text-[1rem] text-[0.5rem] font-normal leading-normal">
                      {data.occupation}
                    </p>
                  </div>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialDisplay;
