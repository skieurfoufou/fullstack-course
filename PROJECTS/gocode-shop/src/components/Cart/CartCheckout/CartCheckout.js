import React, { useState } from "react";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import "./CartCheckout.css";

function CartCheckout({ onCancel }) {
  const [isSubmitSuccessful, setIsSubmitSuccessful] = useState(false);

  const onIsSubmitSuccessful = (data) => {
    console.log(data);
    localStorage.setItem("client", data); // Alt - send req to backend
    setIsSubmitSuccessful(true);
  };

  return (
    <>
      <div className="drop-shadow" onClick={onCancel}></div>
      <div className="div-CartCheckout">
        {!isSubmitSuccessful ? (
          <CheckoutForm onIsSubmitSuccessful={onIsSubmitSuccessful} />
        ) : (
          <div className="div-alert">
            <div className="alert alert-success">
              THANKS FOR YOUR INSCRIPTION
            </div>
            <button className="button-order" onClick={onCancel}>
              OK
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartCheckout;
