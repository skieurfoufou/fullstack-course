import React, { useState } from "react";
import "./Cart.css";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import CartCheckOut from "./CartCheckout/CartCheckout";

const Cart = ({ cartItems }) => {
  const [isCartCheckoutOpen, setIsCartCheckoutOpen] = useState(false);

  function onCartCheckoutClick() {
    setIsCartCheckoutOpen(!isCartCheckoutOpen);
  }

  return (
    <div className="cart-container">
      <CartList cartItems={cartItems} />
      <CartTotal onCartCheckoutClick={onCartCheckoutClick} />
      {isCartCheckoutOpen && <CartCheckOut onCancel={onCartCheckoutClick} />}
    </div>
  );
};

export default Cart;
