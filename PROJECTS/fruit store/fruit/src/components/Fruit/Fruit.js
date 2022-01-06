import React from "react";
import "./Fruit.css";

function Fruit({ product, addItemToCart }) {
  const { name, img_url, category, price } = product;

  function addToCart() {
    addItemToCart(product);
  }

  return (
    <div className="Fruit">
      <h1>{name}</h1>
      <img alt="" src={img_url}></img>
      <h2>Price: {price} ₪</h2>
      <h3>Category: {category}</h3>
      <button className="add-button" onClick={addToCart}>
        Add to the Cart
      </button>
    </div>
  );
}

export default Fruit;
