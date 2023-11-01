import React from "react";
// import CartContext from "../../store/cart-context";

const CartItem = (props) => {
  const price = `$${props.amount}`;
  return (
    <li
      className="flex justify-between items-center border-b-2 border-[#8a2b06] py-[1rem] px-0 my-[1rem] mx-0 "
      key={props.id}
    >
      <div className="">
        <img
          src={props.img}
          alt="product-images"
          className="w-[8rem] h-[5rem]"
        />
        <h2 className="text-lg font-bold mb-[0.5rem] text-[#363636]">
          {props.description}
        </h2>
        <div className="w-[10rem] justify-between items-center flex">
          <span className="font-bold text-[#8a2b06]">Price: {price}</span>
          <span className="font-bold border-2 border-[#ccc] rounded-md text-[#363636] py-[0.25rem] px-[0.75rem]">
            {" "}
            x {props.amount}
          </span>
          <span className="font-bold border-2 border-[#ccc] rounded-md text-[#363636] py-[0.25rem] px-[0.75rem]">
            {" "}
            {props.shouldRender}
          </span>
        </div>
      </div>
      <div className="flex md:flex-row font-bold text-[#8a2b06] space-x-5 text-2xl m-[0.75rem] ">
        <button
          //   onClick={props.onRemove}
          className="border-2 border-[#8a2b06] px-[0.75rem] rounded-md"
        >
          -
        </button>
        <button
          //   onClick={props.onAdd}
          className="border-2 border-[#8a2b06] px-[0.75rem] rounded-md"
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
