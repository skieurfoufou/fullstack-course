import React from "react";
import "./Header.css";
import logo from "../../logo.svg";
import cartIcon from "../../assets/shopping-cart.png";

function Header({ cartLength, printCart }) {
  return (
    <header className="App-header">
      <div className="div-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>FRUITS STORE With REACT</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div className="icon-container" onClick={printCart}>
        <img src={cartIcon} alt="cart" className="icon" />
        <div className="icon-number">{cartLength || 0}</div>
      </div>
    </header>
  );
}

export default Header;
