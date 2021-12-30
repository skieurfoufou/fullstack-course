import React from "react";
import "./Product.css";

function Product({ product }) {
  const { image_url, model, price, sizes, category, brand } = product;
  return (
    <div className={`${brand} product`}>
      <img alt={model} className="image" src={image_url} />
      <div className="model-price">
        <div>Model: {model}</div>
        <div className="price">Price: {price}$</div>
      </div>
      <div className="sub-product">Brand: {brand}</div>
      <div className="sub-product">Category: {category}</div>
      <div className="sub-product">Sizes: {sizes}</div>
      <button className="button">ADD</button>
    </div>
  );
}

export default Product;
