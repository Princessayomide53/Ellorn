import React, { useContext } from "react";

import Access1 from "../../../../../assets/Access1.jpg";
import Access2 from "../../../../../assets/Access2.jpg";
import Access3 from "../../../../../assets/Access3.jpg";
import ring1 from "../../../../../assets/ring1.jpg";
import Spec from "../../../../../assets/Spec.jpg";
import spec1 from "../../../../../assets/spec1.jpg";
import watch2 from "../../../../../assets/watch2.jpg";
import ring from "../../../../../assets/ring.jpg";
import necklace from "../../../../../assets/necklace.jpg";
// import accessory10 from "../../../../../assets/accessory10.jpg";
import MensWear from "../Men's Wear/MensWear";
import CartContext from "../../../../../store/cart-context";

const dummy_MenAccessories = [
  {
    id: 33,
    img: Access1,
    amount: 750.1,
    description: "Brown Bag",
    brand: "Al Kamani",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
  {
    id: 34,
    img: Access2,
    amount: 450.32,
    description: "Wizard Hat",
    brand: "Wizzry Lux",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
  {
    id: 35,
    img: Access3,
    amount: 620.41,
    description: "Bracelets",
    brand: "BLG",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
  {
    id: 36,
    img: ring1,
    amount: 1777.99,
    description: "Diamond Ring",
    brand: "Graff",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
  {
    id: 37,
    img: Spec,
    amount: 1897.65,
    description: "Ray Shade",
    brand: "Oakley",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
  {
    id: 38,
    img: necklace,
    amount: 999.99,
    description: "Gold Necklace",
    brand: "Orelia",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
  {
    id: 39,
    img: watch2,
    amount: 799.72,
    description: "Luxury Watch",
    brand: "Cartier",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
  {
    id: 40,
    img: spec1,
    amount: 660.9,
    description: "Black Shade",
    brand: "Ray-Ban",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
  {
    id: 41,
    img: ring,
    amount: 1999.22,
    description: "Royal Ring",
    brand: "Buccellati",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
  // {
  //   id: 10,
  //   img: earring,
  //   amount: 1000,
  //   description: "Silver Earring",
  //   brand: "Dior",
  //   reviews: "(41k) customers review",
  //   shouldRender: false,
  // },
];

const MenAccessories = (props) => {
  const cartItemCtx = useContext(CartContext);
  const addToCartHandler = (item) => {
    // if (item) {
    cartItemCtx.addCart({
      id: item.id,
      img: item.img,
      description: item.description,
      amount: item.amount,
      shouldRender: item.shouldRender,
      quantity: 1,
    });
    // } else {
    //   console.log("Item is undefined.");
    // }
  };
  return (
    <div>
      <MensWear wears={dummy_MenAccessories} onAddCart={addToCartHandler} />
    </div>
  );
};

export default MenAccessories;
