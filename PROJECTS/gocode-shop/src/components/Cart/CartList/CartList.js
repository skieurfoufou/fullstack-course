import CartItem from "../CartItem/CartItem";
import "./CartList.css";

const CartList = ({ cartItems }) => {
  return (
    <section className="">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </section>
  );
};
export default CartList;
