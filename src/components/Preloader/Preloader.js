import React, { useEffect } from "react";
import Cart from "../../assets/Cart.gif";
import { preLoaderAnim } from "../../Animation/Index";

const Preloader = () => {
  useEffect(() => {
    preLoaderAnim();
  });
  return (
    <div className="preloader">
      <div className="texts-container">
        <img src={Cart} alt="cart.gif" />
        <h1 className="font-bold text-white font-serif text-6xl  text-center">
          ELLORN
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
