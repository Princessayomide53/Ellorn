import React from "react";
import Images1 from "../../../../../assets/Images1.png";
import Images2 from "../../../../../assets/Images2.png";
import Images3 from "../../../../../assets/Images3.png";
import Images4 from "../../../../../assets/Images4.png";
import Images5 from "../../../../../assets/Images5.png";
import Images6 from "../../../../../assets/Images6.png";
import WmsWear from "./WmsWear";

const dummy_WmsWear = [
  {
    id: 1,
    img: Images1,
    amount: 78.71,
    description: "Shiny Dress",
    brand: "Fendi",
    reviews: "(41k) customers review",
  },
  {
    id: 2,
    img: Images2,
    amount: 90.35,
    description: "Long Dress",
    brand: "Dolce & Gabbana",
    reviews: "(41k) customers review",
  },
  {
    id: 3,
    img: Images3,
    amount: 45.56,
    description: "Full Sweater",
    brand: "Dior",
    reviews: "(41k) customers review",
  },
  {
    id: 4,
    img: Images4,
    amount: 65.62,
    description: "Corporate Shirt",
    brand: "Valentino",
    reviews: "(41k) customers review",
  },
  {
    id: 5,
    img: Images5,
    amount: 75.2,
    description: "Soft Blue Top",
    brand: "Prada",
    reviews: "(41k) customers review",
  },
  {
    id: 6,
    img: Images6,
    amount: 180.8,
    description: "White Shirt",
    brand: "Lacoste",
    reviews: "(41k) customers review",
  },
];
const Women = () => {
  return (
    <div>
      <WmsWear WmsWear={dummy_WmsWear} />
    </div>
  );
};

export default Women;
