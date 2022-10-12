import React from "react";
import { useState,useEffect } from "react";

// 傳統form
const FirstPage = () => {
  const [surname, setSurname] = useState("");
  const [firstName, setFirstName] = useState("");
  const [age, setAge] = useState(0);
  const onFormSumbit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    const formData = new FormData(e.target);
    for (const pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }
  };
  useEffect(()=>{
    console.log('改變1',surname);
    return()=>{
        console.log('改變2',surname);
    }
  })

  //every single rendering trigger the following code once
  console.log("Form rendered");
  return (
    <form onSubmit={onFormSumbit}>
      <h1>Using Pure React</h1>
      First Name:
      <input
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
        name="firstName"
        value={firstName || ""}
      />
      <br />
      Surname:
      <input
        onChange={(e) => {
          setSurname(e.target.value);
        }}
        name="surname"
        value={surname || ""}
      />
      <br />
      Age:
      <input
        onChange={(e) => {
          setAge(e.target.value);
        }}
        name="age"
        value={age || ""}
        type="number"
      />
      <br />
      <input type="submit" />
    </form>
  );
};

export default FirstPage;
