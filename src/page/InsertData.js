import React,{useEffect} from "react";
import { useForm } from "react-hook-form";

// react-hook-form
const InsertData = () => {
  const { register, handleSubmit } = useForm();
  const onFormSumbit = (formObj, e) => {
    e.preventDefault();
    console.log("Form Submitted", e);
    const formData = new FormData(e.target);
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  };
  useEffect(()=>{
    console.log('改變1',register);
    return()=>{
        console.log('改變2',register);
    }
  })

  //every single rendering trigger the following code once
  return (
    <form onSubmit={handleSubmit(onFormSumbit)}>
      <input {...register("firstName")} />
      <input {...register("surname")} />
      <input {...register("age")} />
      <input type="submit" />
    </form>
  );
};

export default InsertData;
