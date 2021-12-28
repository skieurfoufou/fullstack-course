import React from "react";
import "./Filters.css";

function Filters({ filters }) {
  return (
    <div className="Filters">
      <div className="sub-filters">
        <label for="brand">Choose a Brand</label>
        <select
          className="filter"
          onChange={(e) => console.log(e.target.value)}
        >
          <option>none</option>
          {filters.brands.map((f) => (
            <option value={f.value}>{f}</option>
          ))}
        </select>
      </div>
      <div className="sub-filters">
        <label for="category">Choose a Category</label>
        <select
          className="filter"
          onChange={(e) => console.log(e.target.value)}
        >
          <option>None</option>
          {filters.categories.map((f) => (
            <option value={f.value}>{f}</option>
          ))}
        </select>
      </div>
      <div className="sub-filters">
        <label for="price">Choose a Price</label>
        <select
          className="filter"
          onChange={(e) => console.log(e.target.value)}
        >
          <option>None</option>
          {filters.prices.map((f) => (
            <option value={f.value}>{f}</option>
          ))}
        </select>
      </div>
      <div className="filter cart">
        Cart
        <img
          alt=""
          className="image-cart"
          src="https://www.graphicsprings.com/filestorage/stencils/3055581cff0526602142cbb0bfba9fca.png?width=500&height=500"
        />
      </div>
    </div>
  );
}

export default Filters;
