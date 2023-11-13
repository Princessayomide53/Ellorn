import React, { useContext, useEffect } from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";
import { Link } from "react-router-dom";

const Cart = (props) => {
  const cartsCtx = useContext(CartContext);
  const totalAmount = `$${cartsCtx.totalAmount.toFixed(2)} `;

  const { items } = cartsCtx;

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartsCtx.items));
    console.log("adding items", cartsCtx.items);
    if (cartsCtx.items === 0) {
      localStorage.removeItem(cartsCtx.items);
    }
  }, [cartsCtx.items]);

  const cartItemAddHandler = (items) => {
    cartsCtx.addCart(items);
    console.log("added more items", items);
  };

  const cartItemRemoveHandler = (id) => {
    cartsCtx.removeCart(id);
    // console.log(id);
  };

  const hasItems = cartsCtx.items.length > 0;

  const productItems = (
    <ul className="sm:max-h-[30rem] max-h-[20rem] overflow-hidden overflow-y-scroll">
      {cartsCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          img={item.img}
          description={item.description}
          amount={item.amount}
          shouldRender={item.shouldRender}
          quantity={item.quantity}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );
  return (
    <Modal onClose={props.onHideCart}>
      {productItems}
      <div className="flex justify-between items-center text-[1.5rem] my-[1rem] mx-0">
        <span className="text-2xl font-bold">Total Amount</span>
        <span className="text-2xl font-bold">{totalAmount}</span>
      </div>
      <div className="text-right">
        <button
          onClick={props.onHideCart}
          className="border-[#8a2b06] border-2 bg-transparent cursor-pointer font-inherit rounded-2xl ml-[1rem] py-[0.5rem] px-[2rem] hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white text-[#8a2b06]"
        >
          Close
        </button>

        {hasItems && (
          <Link to="/payment">
            <button className="border-[#8a2b06] border-2 bg-transparent cursor-pointer font-inherit rounded-2xl ml-[1rem] py-[0.5rem] px-[2rem] hover:bg-[#5a1a01] hover:border-[#5a1a01] hover:text-white active:bg-[#5a1a01] active:border-[#5a1a01] active:text-white text-[#8a2b06]">
              CheckOut
            </button>
          </Link>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
