import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Card from "../../UI/Cards";
import Test1 from "../../../assets/Test1.png";
import Test2 from "../../../assets/Test2.png";
import stars from "../../../assets/stars.png";

const testmonials = [
  {
    id: 1,
    img: Test1,
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
  },
  {
    id: 2,
    img: Test2,
    text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
  },
];

const TestimonialDisplay = () => {
  return (
    <section className="container">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        autoplay={true}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        modules={(EffectCoverflow, Pagination)}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        className="swiper-container"
      >
        <SwiperSlide>
          <Card className="w-[47rem] h-[25rem] py-[4rem] m-auto justify-evenly flex bg-white rounded-md">
            <div className="">
              <img src={Test1} alt="pictures" />
            </div>
            <div>
              <p className="font-normal text-[0.875rem] text-[#484848]">
                "You won't regret it. I would like to personally thank <br />{" "}
                you for your outstanding product. Absolutely
                <br /> wonderful!"
              </p>
              <img
                src={stars}
                alt="pictures"
                className="w-[5.937rem] h-[1.1875rem] object-cover"
              />
            </div>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card className="w-[54rem] h-[25rem] m-auto bg-white rounded-sm">
            <div>
              <img src={Test2} alt="pictures" />
            </div>
          </Card>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default TestimonialDisplay;
