import React from "react";
import Fruit from "../Fruit/Fruit";
import "./FruitsList.css";

function FruitsList({ products, addItemToCart }) {
  return (
    <div className="Fruit-list">
      {products.map((product) => (
        <Fruit
          key={product.code}
          product={product}
          addItemToCart={addItemToCart}
        />
      ))}
    </div>
  );
}

export default FruitsList;
