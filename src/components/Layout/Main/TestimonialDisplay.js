import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
// import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import Card from "../../UI/Cards";
import Test1 from "../../../assets/Test1.png";
import Test2 from "../../../assets/Test2.png";

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
    <Card className="w-[54rem] h-[25rem] bg-white rounded-lg">
      <div>
        {testmonials.map((data) => (
          <div key={data.id}>
            <img src={data.img} alt="pictures" />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default TestimonialDisplay;
