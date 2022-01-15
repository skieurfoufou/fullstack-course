import React from "react";
import CartContext from "../../../contexts/CartContext";
import { useContext } from "react";
import "./CartTotal.css";

function CartTotal() {
  const { calculateTotalCartPrice } = useContext(CartContext);

  return (
    <div className="cartTotal-container">
      <div className="totalPrice-container">
        TOTAL AMOUNT :
        <span className="totalPrice">
          {" "}
          {calculateTotalCartPrice().toFixed(2)} $
        </span>
      </div>
      <button className="button-checkout">Checkout</button>
    </div>
  );
}

export default CartTotal;
