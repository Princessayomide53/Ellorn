import React from "react";
import WmsAccessories from "./WmsAccessories";
import earring from "../../../../../assets/earring.jpg";
import accessory1 from "../../../../../assets/accessory1.jpg";
import accessory2 from "../../../../../assets/accessory2.jpg";
import accessory3 from "../../../../../assets/accessory3.jpg";
import accessory4 from "../../../../../assets/accessory4.jpg";
import accessory5 from "../../../../../assets/accessory5.jpg";
import accessory6 from "../../../../../assets/accessory6.jpg";
import accessory7 from "../../../../../assets/accessory7.jpg";
import accessory8 from "../../../../../assets/accessory8.jpg";
import accessory9 from "../../../../../assets/accessory9.jpg";
import guccimani from "../../../../../assets/guccimani.jpg";
import femalering from "../../../../../assets/femalering.jpg";
import MensWear from "../Men's Wear/MensWear";

const dummy_Accessories = [
  {
    id: 1,
    img: accessory1,
    amount: 1889.82,
    description: "Hat & Necklaces",
    brand: "Tiffany & Co.",
    reviews: "(41k) customers review",
  },
  {
    id: 2,
    img: accessory2,
    amount: 1209.88,
    description: "Bag & Bracelet",
    brand: "Meljuri",
    reviews: "(41k) customers review",
  },
  {
    id: 3,
    img: accessory3,
    amount: 980.99,
    description: "Fancy Bag",
    brand: "BVLGARI",
    reviews: "(41k) customers review",
  },
  {
    id: 4,
    img: accessory4,
    amount: 878.76,
    description: "Black Bag",
    brand: "Graff",
    reviews: "(41k) customers review",
  },
  {
    id: 5,
    img: accessory5,
    amount: 899.99,
    description: "Gold Earring",
    brand: "Chopard",
    reviews: "(41k) customers review",
  },
  {
    id: 6,
    img: accessory6,
    amount: 2000,
    description: "Sets of Necklace",
    brand: "Orelia",
    reviews: "(41k) customers review",
  },
  {
    id: 7,
    img: accessory7,
    amount: 890.62,
    description: "Face Cover",
    brand: "Cartier",
    reviews: "(41k) customers review",
  },
  {
    id: 8,
    img: accessory8,
    amount: 2799.9,
    description: "Pearl Necklace",
    brand: "David Yurman",
    reviews: "(41k) customers review",
  },
  {
    id: 9,
    img: accessory9,
    amount: 990.32,
    description: "Double Necklace",
    brand: "Buccellati",
    reviews: "(41k) customers review",
  },
  {
    id: 10,
    img: earring,
    amount: 1000,
    description: "Silver Earring",
    brand: "Dior",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
  {
    id: 11,
    img: guccimani,
    amount: 2220.0,
    description: "Gucci Bag",
    brand: "Gucci",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
  {
    id: 10,
    img: femalering,
    amount: 1000,
    description: "Silver Earring",
    brand: "Dior",
    reviews: "(41k) customers review",
    shouldRender: false,
  },
];

const Wms = () => {
  return (
    <div>
      <MensWear wears={dummy_Accessories} />
    </div>
  );
};

export default Wms;
