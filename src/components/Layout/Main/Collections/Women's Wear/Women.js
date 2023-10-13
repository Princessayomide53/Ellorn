import React from "react";
import Images1 from "../../../../../assets/Images1.png";
import Images2 from "../../../../../assets/Images2.png";
import Images3 from "../../../../../assets/Images3.png";
import Images4 from "../../../../../assets/Images4.png";
import Images5 from "../../../../../assets/Images5.png";
import Images6 from "../../../../../assets/Images6.png";
import Images7 from "../../../../../assets/Images7.jpg";
import Images8 from "../../../../../assets/Images8.jpg";
import Images9 from "../../../../../assets/Images9.jpg";
// import WmsWear from "./WmsWear";
import MensWear from "../Men's Wear/MensWear";

const dummy_WmsWear = [
  {
    id: 1,
    img: Images1,
    amount: 88.1,
    description: "Shiny Dress",
    brand: "Fendi",
    reviews: "(41k) customers review",
  },
  {
    id: 2,
    img: Images2,
    amount: 97.0,
    description: "Long Dress",
    brand: "Dolce & Gabbana",
    reviews: "(41k) customers review",
  },
  {
    id: 3,
    img: Images3,
    amount: 65.32,
    description: "Full Sweater",
    brand: "Dior",
    reviews: "(41k) customers review",
  },
  {
    id: 4,
    img: Images4,
    amount: 77.09,
    description: "Corporate Shirt",
    brand: "Valentino",
    reviews: "(41k) customers review",
  },
  {
    id: 5,
    img: Images5,
    amount: 55.4,
    description: "Soft Blue Top",
    brand: "Prada",
    reviews: "(41k) customers review",
  },
  {
    id: 6,
    img: Images6,
    amount: 50.0,
    description: "White Shirt",
    brand: "Lacoste",
    reviews: "(41k) customers review",
  },
  {
    id: 7,
    img: Images7,
    amount: 190.3,
    description: "Armless Gown",
    brand: "Zara",
    reviews: "(41k) customers review",
  },
  {
    id: 8,
    img: Images8,
    amount: 60.72,
    description: "Gown Hood",
    brand: "Ralph Lauren",
    reviews: "(41k) customers review",
  },
  {
    id: 9,
    img: Images9,
    amount: 49.74,
    description: "Armless Top",
    brand: "H&M",
    reviews: "(41k) customers review",
  },
];
const Women = () => {
  return (
    <div>
      <MensWear wears={dummy_WmsWear} />
    </div>
  );
};

export default Women;
