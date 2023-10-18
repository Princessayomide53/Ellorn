import React from "react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Pagination } from "swiper/modules";
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
    <section className="w-full h-[300px] relative">
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20">
        {testmonials.map((data) => (
          <Card
            key={data.id}
            className="w-[45rem] z-20 h-[20rem] py-[3rem] m-auto justify-evenly flex bg-white rounded-lg"
          >
            <img
              src={data.img}
              alt="pictures"
              className="w-[13.125rem] h-[13.125rem] object-cover rounded-md"
            />

            <div>
              <p className="font-normal w-[20rem] text-[0.875rem] text-[#484848] pb-[1.5rem]">
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
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default TestimonialDisplay;
