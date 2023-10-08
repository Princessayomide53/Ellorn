import React from "react";

const MensWear = () => {
  const fetchedWears = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const data = await response.json();
  };
  return <section>{data && data.data.map((items) => <div>{items.}</div>)}</section>;
};

export default MensWear;
