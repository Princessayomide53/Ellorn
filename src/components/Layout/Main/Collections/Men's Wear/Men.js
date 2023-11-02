import React from "react";
import men1 from "../../../../../assets/men1.jpg";
import men2 from "../../../../../assets/men2.jpg";
import men3 from "../../../../../assets/men3.jpg";
import men4 from "../../../../../assets/men4.jpg";
import men5 from "../../../../../assets/men5.jpg";
import men6 from "../../../../../assets/men6.jpg";
import men7 from "../../../../../assets/men7.jpg";
import men8 from "../../../../../assets/men8.jpg";
import men9 from "../../../../../assets/men9.jpg";
import men10 from "../../../../../assets/men10.jpg";
import men11 from "../../../../../assets/men11.jpg";
// import men12 from "../../../../../assets/men12.jpg";
import MensWear from "../Men's Wear/MensWear";
// import Cart from "../../../../Cart/Cart";

const dummy_Wears = [
  {
    id: 1,
    img: men1,
    name: "Men's wear",
    amount: 78.71,
    description: "Silky Top",
    brand: "Fendi",
    reviews: "(41k) customers review",
    shouldRender: true,
    quantity: 1,
  },
  {
    id: 2,
    img: men2,
    name: "Men's wear",
    amount: 90.35,
    description: "Hoods and Shorts",
    brand: "Dolce & Gabbana",
    reviews: "(41k) customers review",
    shouldRender: true,
    quantity: 1,
  },
  {
    id: 3,
    img: men3,
    name: "Men's wear",
    amount: 45.56,
    description: "Fits Top",
    brand: "Dior",
    reviews: "(41k) customers review",
    shouldRender: true,
    quantity: 1,
  },
  {
    id: 4,
    img: men4,
    name: "Men's wear",
    amount: 65.62,
    description: "Corporate Shirt",
    brand: "Valentino",
    reviews: "(41k) customers review",
    shouldRender: true,
    quantity: 1,
  },
  {
    id: 5,
    img: men5,
    name: "Men's wear",
    amount: 75.2,
    description: "Soft Blue Top",
    brand: "Prada",
    reviews: "(41k) customers review",
    shouldRender: true,
    quantity: 1,
  },
  {
    id: 6,
    img: men6,
    name: "Men's wear",
    amount: 180.8,
    description: "Jean and Jacket",
    brand: "Lacoste",
    reviews: "(41k) customers review",
    shouldRender: true,
    quantity: 1,
  },
  {
    id: 7,
    img: men7,
    name: "Men's wear",
    amount: 35.99,
    description: "Sheer Gray Top",
    brand: "Givenchy",
    reviews: "(41k) customers review",
    shouldRender: true,
    quantity: 1,
  },
  {
    id: 8,
    img: men8,
    name: "Men's wear",
    amount: 50.8,
    description: "Thick black Top",
    brand: "Louis Vuitton",
    reviews: "(41k) customers review",
    shouldRender: true,
  },
  {
    id: 9,
    img: men9,
    name: "Men's wear",
    amount: 200.4,
    description: "Nice Brown Suit",
    brand: "Burberry",
    reviews: "(41k) customers review",
    shouldRender: true,
    quantity: 1,
  },
  {
    id: 10,
    img: men10,
    name: "Men's wear",
    amount: 105.79,
    description: "Jacket and  Top",
    brand: "Armani",
    reviews: "(41k) customers review",
    shouldRender: true,
    quantity: 1,
  },
  {
    id: 11,
    img: men11,
    name: "Men's wear",
    amount: 60.92,
    description: "Thin Top",
    brand: "H&M",
    reviews: "(41k) customers review",
    shouldRender: true,
    quantity: 1,
  },
];
const Men = () => {
  return (
    <div className="overflow-hidden w-full">
      <MensWear wears={dummy_Wears} />
      {/* <Cart products={dummy_Wears} /> */}
    </div>
  );
};

export default Men;
