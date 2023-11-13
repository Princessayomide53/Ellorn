import React from "react";
import { Link } from "react-router-dom";

const Completion = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-center p-7 text-[3rem]">
        Thanks for your Patronage! 😁🎉
      </h1>
      <button className="px-7 py-2 text-[1.5rem] border-2 border-black hover:bg-black text-black transition-all duration-300 hover:text-white rounded-lg">
        <Link to="/"> Home</Link>
      </button>
    </div>
  );
};

export default Completion;
