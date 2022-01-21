import React, { useState } from "react";
import "./Cart.css";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import CartCheckOut from "./CartCheckout/CartCheckout";
import CartOrder from "./CartOrder/CartOrder";

const Cart = ({ cartItems }) => {
  const [isCartCheckoutOpen, setIsCartCheckoutOpen] = useState(false);
  const [isCartOrderOpen, setIsCartOrderOpen] = useState(false);

  function onCartCheckoutClick() {
    setIsCartCheckoutOpen(!isCartCheckoutOpen);
  }

  function onCartOrderClick() {
    setIsCartOrderOpen(!isCartOrderOpen);
  }

  return (
    <div className="cart-container">
      <CartList cartItems={cartItems} />
      <CartTotal onCartCheckoutClick={onCartCheckoutClick} />
      {isCartCheckoutOpen && <CartCheckOut onCancel={onCartCheckoutClick} />}
      {isCartOrderOpen && <CartOrder onCancel={onCartOrderClick} />}
    </div>
  );
};

export default Cart;
