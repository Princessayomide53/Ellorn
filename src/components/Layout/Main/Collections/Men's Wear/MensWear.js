import React from "react";
import Card from "../../../../UI/Cards";

const MensWear = (props) => {
  return (
    <section>
      <ul className="grid grid-cols-3 gap-[2rem] place-items-center">
        {props.wears.map((items) => (
          <Card
            key={items.id}
            className="w-[25rem] h-[28rem] bg-white shadow-xl"
          >
            <img
              src={items.img}
              alt="men's wears"
              className="w-[20rem] h-[15rem] mx-auto p-5 rounded-lg"
            />
          </Card>
        ))}
      </ul>
    </section>
  );
};

export default MensWear;
