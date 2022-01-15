import React from "react";
import Filter from "../Filter/Filter";
import "./Filters.css";

function Filters({ filters, onFilterChange }) {
  return (
    <div className="Filters">
      <Filter
        label="Sort by Category"
        onFilterChange={(e) => {
          onFilterChange("categories", e.target.value);
        }}
        filters={filters.categories}
      />

      <Filter
        label="Sort by Price"
        onFilterChange={(e) => {
          onFilterChange("price", e.target.value);
        }}
        filters={filters.price}
        suffix="₪"
      />

      <Filter
        label="Sort by Color"
        onFilterChange={(e) => {
          onFilterChange("colors", e.target.value);
        }}
        filters={filters.colors}
      />

      <Filter
        label="Sort by Season"
        onFilterChange={(e) => {
          onFilterChange("season", e.target.value);
        }}
        filters={filters.season}
      />
    </div>
  );
}

export default Filters;
