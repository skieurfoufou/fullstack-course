import "./Cart.css";
import CartList from "./CartList/CartList";
import CartTotal from "./CartTotal/CartTotal";
import CartCheckOut from "./CartCheckout/CartCheckout";

const Cart = ({ cartItems }) => {
  return (
    <div className="cart-container">
      <CartList cartItems={cartItems} />
      <CartTotal />
      <CartCheckOut />
    </div>
  );
};

export default Cart;
