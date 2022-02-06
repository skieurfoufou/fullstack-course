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
        label="Sort by Artist"
        onFilterChange={(e) => {
          onFilterChange("artist", e.target.value);
        }}
        filters={filters.artist}
      />

      <Filter
        label="Sort by language"
        onFilterChange={(e) => {
          onFilterChange("language", e.target.value);
        }}
        filters={filters.language}
      />

      <Filter
        label="Sort by Years"
        onFilterChange={(e) => {
          onFilterChange("years", e.target.value);
        }}
        filters={filters.years}
      />
    </div>
  );
}

export default Filters;
