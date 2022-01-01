import React from "react";
import "./Filters.css";

function Filters({ filters, onFilterChange }) {
  return (
    <div className="Filters">
      <div className="sub-filters">
        <label>Choose a Brand</label>
        <select
          className="filter"
          onChange={(e) => {
            onFilterChange("brand", e.target.value);
            console.log(e.target.value);
          }}
        >
          <option value="">None</option>
          {filters.brands.map((f) => (
            <option key={f.value} value={f.value}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <div className="sub-filters">
        <label>Choose a Category</label>
        <select
          className="filter"
          onChange={(e) => {
            onFilterChange("category", e.target.value);
          }}
        >
          <option value="">None</option>
          {filters.categories.map((f) => (
            <option key={f.value} value={f.value}>
              {f}
            </option>
          ))}
        </select>
      </div>
      <div className="sub-filters">
        <label>Choose a Price</label>
        <select
          className="filter"
          onChange={(e) => {
            onFilterChange("price", e.target.value);
          }}
        >
          <option value="">None</option>
          {filters.prices.map((f) => (
            <option key={f.value} value={f.value}>
              {f}
            </option>
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
