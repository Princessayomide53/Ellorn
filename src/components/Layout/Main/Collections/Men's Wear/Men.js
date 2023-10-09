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
// import men11 from "../../../../../assets/men11.jpg";
// import men12 from "../../../../../assets/men12.jpg";
import MensWear from "../Men's Wear/MensWear";

const dummy_Wears = [
  {
    id: 1,
    img: men1,
    name: "Men's wear",
    amount: 25.7,
    brand: "Gucci & Gabbanna",
    reviews: "41k customers review",
  },
  {
    id: 2,
    img: men2,
    name: "Men's wear",
    amount: 25.7,
    brand: "Gucci & Gabbanna",
    reviews: "41k customers review",
  },
  {
    id: 3,
    img: men3,
    name: "Men's wear",
    amount: 25.7,
    brand: "Gucci & Gabbanna",
    reviews: "41k customers review",
  },
  {
    id: 4,
    img: men4,
    name: "Men's wear",
    amount: 25.7,
    brand: "Gucci & Gabbanna",
    reviews: "41k customers review",
  },
  {
    id: 5,
    img: men5,
    name: "Men's wear",
    amount: 25.7,
    brand: "Gucci & Gabbanna",
    reviews: "41k customers review",
  },
  {
    id: 6,
    img: men6,
    name: "Men's wear",
    amount: 25.7,
    brand: "Gucci & Gabbanna",
    reviews: "41k customers review",
  },
  {
    id: 7,
    img: men7,
    name: "Men's wear",
    amount: 25.7,
    brand: "Gucci & Gabbanna",
    reviews: "41k customers review",
  },
  {
    id: 8,
    img: men8,
    name: "Men's wear",
    amount: 25.7,
    brand: "Gucci & Gabbanna",
    reviews: "41k customers review",
  },
  {
    id: 9,
    img: men9,
    name: "Men's wear",
    amount: 25.7,
    brand: "Gucci & Gabbanna",
    reviews: "41k customers review",
  },
  {
    id: 10,
    img: men10,
    name: "Men's wear",
    amount: 25.7,
    brand: "Gucci & Gabbanna",
    reviews: "41k customers review",
  },
  // {
  //   id: 11,
  //   img: men11,
  //   name: "Men's wear",
  //   amount: 25.7,
  //   brand: "Gucci & Gabbanna",
  //   reviews: "41k customers review",
  // },
  // {
  //   id: 12,
  //   img: men12,
  //   name: "Men's wear",
  //   amount: 25.7,
  //   brand: "Gucci & Gabbanna",
  //   reviews: "41k customers review",
  // },
];
const Men = () => {
  return (
    <div>
      <MensWear wears={dummy_Wears} />
    </div>
  );
};

export default Men;
