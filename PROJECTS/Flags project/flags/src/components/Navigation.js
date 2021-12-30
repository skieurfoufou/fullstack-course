import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink
        to="/"
        className={(navData) => (navData.isActive ? "nav-active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={(navData) => (navData.isActive ? "nav-active" : "")}
      >
        About
      </NavLink>
    </div>
  );
};

export default Navigation;
