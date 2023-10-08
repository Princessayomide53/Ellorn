import React, { useState } from "react";
import image5 from "../../../assets/image5.png";
import image6 from "../../../assets/image6.png";
import image7 from "../../../assets/image7.jpg";
import image8 from "../../../assets/image8.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const Items = () => {
  const [imagesIndex, setImagesIndex] = useState(0);
  const Images = [image5, image6, image7, image8];

  const prevIndex = () => {
    setImagesIndex((index) => (index === 0 ? Images.length - 1 : index - 1));
  };

  const nextIndex = () => {
    setImagesIndex((index) => (index === Images.length - 1 ? 0 : index + 1));
  };
  return (
    <section className="flex space-x-[3.5rem] object-contain ">
      <div className="flex space-x-[1.5rem] justify-end items-end">
        <MdOutlineKeyboardArrowLeft
          className="bg-white mx-1 my-1 shadow-xl text-2xl rounded-full cursor-pointer text-black z-20"
          onClick={prevIndex}
        />
        <MdOutlineKeyboardArrowRight
          className="bg-white mx-1 my-1 shadow-xl text-2xl  rounded-full cursor-pointer text-black z-20"
          onClick={nextIndex}
        />
      </div>

      <img
        src={Images[imagesIndex]}
        alt=""
        className="w-[25rem] h-[35rem] transition duration-300 ease-in-out"
      />
    </section>
  );
};

export default Items;
