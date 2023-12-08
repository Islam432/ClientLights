import css from "./LoginPage.module.css";
import { useState } from "react";
import {SignUp}  from "../../services/auth.service";
import Cookies from "js-cookie"
import { Navigate } from "react-router-dom";
export default function LoginPage() {
  const [data, setData] = useState({ email: "" });

  const hendler = (e: any) => {
    setData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const onSubmit = async (): Promise<void> => {
    try {
      const dat = await SignUp(data);
      console.log(dat);
      
      
      Cookies.set('token' , dat.data.token,{
expires :30,
      });
      <Navigate  to='/' />
      // Do something with the result 'lala'
    } catch (error) {
      // Handle any errors that occur during SignUp
      console.error("Error during SignUp:", error);
    }
  };
  
  return (
    <div>
      <div className={css.block}>
        <h1>LoginPage</h1>
        <input onChange={hendler} name="email" />
        <button onClick={onSubmit}>click</button>
        <div>{data.email}</div>
      </div>
    </div>
  );
}

 
 