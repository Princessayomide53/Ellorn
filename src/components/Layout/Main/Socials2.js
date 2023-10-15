import React from "react";
import socials1 from "../../../assets/socials1.png";
import socials2 from "../../../assets/socials2.png";
import socials3 from "../../../assets/socials3.png";
import socials4 from "../../../assets/socials4.png";
import socials5 from "../../../assets/socials5.png";
import socials6 from "../../../assets/socials6.png";
import socials7 from "../../../assets/socials7.png";

const pictures = [
  {
    id: 1,
    img: socials1,
  },
  {
    id: 2,
    img: socials2,
  },
  {
    id: 3,
    img: socials3,
  },
  {
    id: 4,
    img: socials4,
  },
  {
    id: 5,
    img: socials6,
  },
  {
    id: 6,
    img: socials6,
  },
  {
    id: 7,
    img: socials7,
  },
];
const Socials2 = () => {
  return (
    <div className="flex">
      {pictures.map((image) => (
        <img src={image.img} alt="" />
      ))}
    </div>
  );
};

export default Socials2;
