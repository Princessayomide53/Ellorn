import React, { useContext, useEffect, useState } from "react";
import Card from "../../../../UI/Cards";
import { CiStar } from "react-icons/ci";
import SwiperComponent from "../../SwiperComponent";
import CartContext from "../../../../../store/cart-context";

const MensWear = (props) => {
  const [enableSwiper, setEnableSwiper] = useState(window.innerWidth < 768);

  const cartItemCtx = useContext(CartContext);
  const addToCartHandler = (item) => {
    console.log("adding to Cart", cartItemCtx.addCart);
    cartItemCtx.addCart({
      id: item.id,
      img: item.img,
      description: item.description,
      amount: item.amount,
      shouldRender: item.shouldRender,
      quantity: 1,
    });
  };

  // useEffect(() => {
  //   localStorage.setItem("itemss", JSON.stringify(cartItemCtx.items));
  //   console.log("adding items", cartItemCtx.items);
  // }, [cartItemCtx.items]);

  useEffect(() => {
    const handleResize = () => {
      setEnableSwiper(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="lg:max-w-[78rem] md:max-w-[50rem] m-auto  my-[2rem]">
      {enableSwiper ? (
        <SwiperComponent items={props.wears} />
      ) : (
        <ul className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 lg:gap-[5rem]  xl:gap-[2.5rem] md:gap-[2rem] place-items-center">
          {props.wears.map((item) => (
            // console.log("item:", item),
            <Card
              key={item.id}
              className="lg:w-[21rem] md:w-[18rem] lg:h-[24rem] md:h-[22.5rem]  bg-white shadow-xl rounded-2xl px-[2rem]"
            >
              <img
                src={item.img}
                alt="men's wears"
                loading="lazy"
                className="lg:w-[20rem] h-[15rem] md:w-[15rem]  mx-auto rounded-3xl object-contain"
              />
              <div className="flex justify-between">
                <h1 className=" -mt-5 lg:text-[1.25rem] md:text-[0.9rem] text-[0.75rem] text-[#484848] font-medium leading-normal">
                  {item.description}
                </h1>
                <div className="flex -mt-3">
                  <CiStar className="sm:text-xl text-sm" />
                  <CiStar className="sm:text-xl text-sm" />
                  <CiStar className="sm:text-xl text-sm" />
                </div>
              </div>

              <p className="text-[#8A8A8A]  lg:text-[0.75rem] md:text-[0.65rem] text-[0.68rem] font-medium">
                {item.brand}
              </p>

              <div className="flex my-4 justify-between ">
                <p className=" lg:text-[0.75rem] md:text-[0.5rem] text-[0.58rem] text-[#484848] font-medium">
                  {item.reviews}
                </p>

                <button
                  onClick={() => {
                    addToCartHandler(item);
                  }}
                  className="px-5 rounded-2xl -m-2 lg:text-base md:text-[0.75rem] text-[0.65rem] bg-[#484848] text-white "
                >
                  Add +
                </button>
              </div>

              <div className="flex justify-between mt-7">
                <h4 className=" text-[#484848] lg:text-[1.5rem] md:text-[0.9rem] text-[0.8rem] tracking-[-0.015rem] font-medium ">
                  ${item.amount}
                </h4>
              </div>
            </Card>
          ))}
        </ul>
      )}
    </section>
  );
};

export default MensWear;
