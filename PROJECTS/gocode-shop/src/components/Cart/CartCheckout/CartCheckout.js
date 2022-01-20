import React from "react";
import { useForm } from "react-hook-form";
import "./CartCheckout.css";

function CartCheckout({ onCancel }) {
  const { register, handleSubmit, formState } = useForm({
    mode: "onTouched",
  });
  const { isSubmitting, isSubmitSuccessful, isSubmitted, errors, setError } =
    formState;

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className="drop-shadow" onClick={onCancel}></div>
      <form className="form-checkout" onSubmit={handleSubmit(onSubmit)}>
        {isSubmitSuccessful && (
          <div className="alert alert-success">thanks for your inscription</div>
        )}
        <div className="CartCheckout-form">
          <h1>Inscription</h1>
          <label htmlFor="name" className="label-checkout">
            name
          </label>
          <input
            className="input-checkout"
            type="text"
            name="name"
            placeholder="name"
            {...register("name", { required: true, pattern: /[A-Za-z]{3}/ })}
          ></input>
          <label htmlFor="surname" className="label-checkout">
            surname
          </label>
          <input
            className="input-checkout"
            type="text"
            name="surname"
            placeholder="surname"
            {...register("surname", { required: true })}
          ></input>
          <label htmlFor="address" className="label-checkout">
            address
          </label>
          <input
            className="input-checkout"
            type="text"
            name="address"
            placeholder="address"
            {...register("address", { required: true })}
          ></input>
          <label htmlFor="country" className="label-checkout">
            country
          </label>
          <input
            className="input-checkout"
            type="text"
            name="country"
            placeholder="country"
            {...register("country", { required: true })}
          ></input>
          <label htmlFor="email" className="label-checkout">
            email
          </label>
          <input
            className="input-checkout"
            type="email"
            name="email"
            placeholder="email"
            {...register("email", { required: true })}
          ></input>
          <label htmlFor="cellphone" className="label-checkout">
            cellphone
          </label>
          <input
            className="input-checkout"
            type="number"
            name="cellphone"
            placeholder="cellphone"
            {...register("cellphone", {
              required: true,
              minLength: { value: 10, message: "at least 10 numbers" },
            })}
          ></input>
          <button
            type="submit"
            disabled={isSubmitting}
            className="button-submit"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default CartCheckout;
