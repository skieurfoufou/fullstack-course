import React from "react";
import { useContext } from "react";
import CartContext from "../../../contexts/CartContext";
import "./CartTotal.css";

function CartTotal({ onCartCheckoutClick, onCartOrderClick }) {
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
      <button className="button-checkout" onClick={onCartCheckoutClick}>
        Checkout
      </button>
      <button className="button-order" onClick={onCartOrderClick}>
        Order
      </button>
    </div>
  );
}

export default CartTotal;
