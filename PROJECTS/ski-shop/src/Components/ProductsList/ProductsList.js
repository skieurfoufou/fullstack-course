import React from "react";
import Product from "../Product/Product";
import "./ProductsList.css";

function ProductsList({ products }) {
  return (
    <div className="Product-list">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductsList;
