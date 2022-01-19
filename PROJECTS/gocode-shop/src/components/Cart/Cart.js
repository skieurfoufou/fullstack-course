import React, { useState } from "react";
import "./Cart.css";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import CartCheckOut from "./CartCheckout/CartCheckout";

const Cart = ({ cartItems }) => {
  const [isCartCheckoutOpen, setIsCartCheckoutOpen] = useState(false);

  function onCartCheckoutClick() {
    if (isCartCheckoutOpen) {
      setIsCartCheckoutOpen(false);
    } else {
      setIsCartCheckoutOpen(true);
    }
  }

  return (
    <div className="cart-container">
      <CartList cartItems={cartItems} />
      <CartTotal onCartCheckoutClick={onCartCheckoutClick} />
      {isCartCheckoutOpen && <CartCheckOut />}
    </div>
  );
};

export default Cart;
