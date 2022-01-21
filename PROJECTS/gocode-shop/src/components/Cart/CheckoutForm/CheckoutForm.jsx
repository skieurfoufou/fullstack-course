import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function CheckoutForm({ onIsSubmitSuccessful }) {
  const { register, handleSubmit, formState } = useForm({
    mode: "onSubmit",
  });
  const { isSubmitting, isSubmitSuccessful, errors } = formState;

  const onSubmit = (data) => {
    onIsSubmitSuccessful(data);
  };

  return (
    <form className="form-checkout" onSubmit={handleSubmit(onSubmit)}>
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
      {errors.name && (
        <div className="div-error">
          This field is required, at least 3 letters{" "}
        </div>
      )}
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
      {errors.surname && (
        <div className="div-error">This field is required</div>
      )}
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
      {errors.address && (
        <div className="div-error">This field is required</div>
      )}
      <label htmlFor="country" className="label-checkout">
        continent & country
      </label>
      <div className="div-country-continent">
        <select
          className="input-checkout"
          id="continent"
          name="continent"
          {...register("continent", { required: true })}
        >
          <option value="europe">Europe</option>
          <option value="north-america">North America</option>
          <option value="south-america">South America</option>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
          <option value="oceania">Oceania</option>
        </select>
        {errors.continent && (
          <div className="div-error">This field is required</div>
        )}
        <input
          className="input-checkout"
          type="text"
          name="country"
          placeholder="country"
          {...register("country", { required: true })}
        ></input>
        {errors.country && (
          <div className="div-error">This field is required</div>
        )}
      </div>
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
      {errors.email && <div className="div-error">This field is required</div>}
      <label htmlFor="cellphone" className="label-checkout">
        cellphone
      </label>
      <div className="div-cellphone">
        <select
          className="input-checkout"
          type="number"
          name="beforeCellphone"
          {...register("before-cellphone", {
            required: true,
          })}
        >
          {Array(10)
            .fill(null)
            .map((_, idx) => {
              const value = `0${idx + 50}`;
              return (
                <option key={idx} value={value}>
                  {value}
                </option>
              );
            })}
        </select>
        <input
          className="input-checkout"
          type="number"
          name="cellphone"
          placeholder="cellphone"
          {...register("cellphone", {
            required: true,
            minLength: 7,
            maxLength: 7,
          })}
        ></input>
        {errors.cellphone && (
          <div className="div-error">
            This field is required,min and max 7 numbers
          </div>
        )}
      </div>
      <button type="submit" disabled={isSubmitting} className="button-submit">
        Submit
      </button>
    </form>
  );
}

export default CheckoutForm;
