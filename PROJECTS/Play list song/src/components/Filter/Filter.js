import React from "react";
import "./Filter.css";

function Filter({ label, onFilterChange, filters, withNone = true, suffix }) {
  const getFormattedTextContent = (value) => {
    return suffix ? `${value} ${suffix}` : value;
  };

  return (
    <div className="filter-container">
      <label className="filter-label">{label}</label>
      <select className="filter-select" onChange={onFilterChange}>
        {withNone && <option value="">None</option>}
        {filters.map((f) => (
          <option key={f} value={f}>
            {getFormattedTextContent(f)}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
