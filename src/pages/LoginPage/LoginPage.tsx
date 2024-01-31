import css from "./LoginPage.module.css";
import { useContext, useEffect, useState } from "react";
import { SignUp, getData,  } from "../../services/auth.service";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../App";

export default function LoginPage() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "" });
  const [cook, setCook] = useState(Cookies.get('token'));
  const {auth} = useContext(AppContext)

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (): Promise<void> => {
    try {
       const dat = await getData(data);
      console.log(dat);
      
      const newToken = dat.data.token;
      auth.login(dat.data.token)
      Cookies.set('token', newToken, {
        expires: 30,
      });
      setCook(newToken); 
    } catch (error) {
      console.error("Error during SignUp:", error);
    }
  };

  useEffect(() => {
    if (cook) {
      console.log('Redirecting to /');
      navigate('/');
    }
  }, [cook, navigate]);

 
  
  return (
    <div>
      <div className={css.block}>
        <h1>LoginPage</h1>
        <input onChange={handler} name="email" />
        <button onClick={onSubmit}>click</button>
        <div>{data.email}</div>
      </div>
    </div>
  );
}
