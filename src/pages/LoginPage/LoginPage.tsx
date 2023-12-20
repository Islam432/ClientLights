import css from "./LoginPage.module.css";
import {  useEffect, useState } from "react";
import {SignUp}  from "../../services/auth.service";
import Cookies from "js-cookie"
import {  useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigete  = useNavigate()
  const [data, setData] = useState({ email: "" });

  const cook = Cookies.get('token');


  const hendler = (e:  React.ChangeEvent<HTMLInputElement>) => {
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
      navigete('/');
    } catch (error) {
    
      console.error("Error during SignUp:", error);
    }
  };
  useEffect(() =>  {
 
    
  
    if (cook) {
      console.log('Redirecting to /signin');
      navigete('/');
    }
  },[cook])
  
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

 
 