import React from "react";
import "./Header.css";
import logo from "../../logo.svg";

function Header() {
  return (
    <header className="App-header">
      <div className="div-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>SONGS LIST With REACT</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="icon-container">
        <div className="icon-number"></div>
      </div>
    </header>
  );
}

export default Header;
