import React from "react";
import "./All.css";
import { useState } from "react";
import { useForm } from "react-hook-form";



function Faculty() {
  const { register, handleSubmit, errors } = useForm();
  const [userInfo,setUserInfo]=useState();
  const submitForm = (data) => {
    setUserInfo(data);
    console.log(data);
  };
  return (
    <div className="Form">
      <pre>{JSON.stringify(userInfo,undefined,2)}</pre>
      <div className="title">Sign Up</div>
      <div className="inputs">
        <form onSubmit={handleSubmit(submitForm)}>
          <input
            type="text" name="firstName" ref={register} placeholder="First Name..."/>  
          <input
            type="text"
            name="lastName"
            placeholder="Last Name..."
            ref={register}
          />
         
          <input type="submit" id="submit" />
        </form>
      </div>
    </div>
  );
}

export default Faculty;