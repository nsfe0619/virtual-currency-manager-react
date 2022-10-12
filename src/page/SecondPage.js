import React from "react";
import { useForm } from "react-hook-form";

// react-hook-form
const SecondPage = () => {
  const { register, handleSubmit } = useForm();
  const onFormSumbit = (formObj, e) => {
    e.preventDefault();
    console.log("Form Submitted", e);
    const formData = new FormData(e.target);
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  };

  //every single rendering trigger the following code once
  console.log("Form rendered");
  return (
    <form onSubmit={handleSubmit(onFormSumbit)}>
      <h1>Using React-Hook-Form</h1>
      First Name:
      <input {...register("firstName")} />
      <br />
      Surname:
      <input {...register("surname")} />
      <br />
      Age:
      <input {...register("age")} />
      <br />
      <input type="submit" />
    </form>
  );
};

export default SecondPage;
