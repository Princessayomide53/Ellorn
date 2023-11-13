import React from "react";

const Timer = () => {
  return (
    <div className="flex lg:space-x-[2rem] md:space-x-[1rem] space-x-[0.75rem]">
      <div>
        <h3 className="text-[#484848] lg:text-[2rem] md:text-[0.8rem] text-[0.5rem] font-normal leading-[2rem] bg-white px-3 sm:py-[0.7rem] py-[0.4rem]  rounded-md shadow-xl">
          40
        </h3>
        <p className="text-center lg:text-[1.5rem] md:text-[0.7rem] text-[0.6rem] font-normal text-[#484848] leading-[1.8rem] sm:pt-3 pt-1">
          Days
        </p>
      </div>
      <div>
        <h3 className="text-[#484848] lg:text-[2rem] md:text-[0.8rem] text-[0.6rem] font-normal leading-[2rem] bg-white px-3 sm:py-[0.7rem] py-[0.4rem] rounded-md shadow-xl">
          59
        </h3>
        <p className="text-center lg:text-[1.5rem] md:text-[0.7rem] text-[0.5rem] font-normal text-[#484848] leading-[1.8rem] sm:pt-3 pt-1">
          Hr
        </p>
      </div>
      <div>
        <h3 className="text-[#484848] lg:text-[2rem] md:text-[0.8rem] text-[0.6rem] font-normal leading-[2rem] bg-white px-3 sm:py-[0.7rem] py-[0.4rem] rounded-md shadow-xl">
          60
        </h3>
        <p className="text-center lg:text-[1.5rem] md:text-[0.7rem] text-[0.5rem] font-normal text-[#484848] leading-[1.8rem] sm:pt-3 pt-1">
          Mins
        </p>
      </div>
      <div>
        <h3 className="text-[#484848] lg:text-[2rem] md:text-[0.8rem] text-[0.6rem] font-normal leading-[2rem] bg-white px-3 sm:py-[0.7rem] py-[0.4rem] rounded-md shadow-xl">
          50
        </h3>
        <p className="text-center lg:text-[1.5rem] md:text-[0.7rem] text-[0.5rem] font-normal text-[#484848] leading-[1.8rem] sm:pt-3 pt-1">
          Secs
        </p>
      </div>
    </div>
  );
};

export default Timer;
