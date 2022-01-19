import React from "react";
import "./CartCheckout.css";

function CartCheckout({ onCancel }) {
  return (
    <>
      <div className="drop-shadow" onClick={onCancel}></div>
      <div className="CartCheckout-form">
        <label>name</label>
        <input placeholder="name"></input>
        <label>surname</label>
        <input placeholder="surname"></input>
        <label>address</label>
        <input placeholder="address"></input>
        <label>state</label>
        <input placeholder="state"></input>
      </div>
    </>
  );
}

export default CartCheckout;
