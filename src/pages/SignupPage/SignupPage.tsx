import css from "./SignupPage.module.css";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EyeSlashIcon from "../../assets/Eye.svg";
import EyeSharpIcon from "../../assets/Opened.svg";
import { Register } from "../../services/auth.service";
import Cookies from "js-cookie";
import { AppContext } from "../../App";


export const AufPage = () => {
  const { auth } = useContext(AppContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cook, setCook] = useState(Cookies.get("token"));
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
   const passwordRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return passwordRegex.test(password);
  };
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1((prev) => !prev);
  };

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e: any) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async () => {

  
    const data = { email, password };

    const dat = await Register(data);
console.log(dat)
const newToken = dat.data.token;
auth.login(dat.data.token);
Cookies.set("token", newToken, {
  expires: 30,
});
setCook(newToken);

  }

useEffect(() => {
if (cook) {
console.log("Redirecting to /");
navigate("/");
}
}, [cook, navigate]);
  
  return (
    <div className={css.block}>
      <div className={css.card}>
        <h2 className={css.title}>Create Account</h2>
        <div className={css.child}>
          <div className={css.inp}>
            <input
              type="email"
              className={css.input}
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>

          <div className={css.inp}>
            <input
              type={passwordVisible ? "text" : "password"}
              className={css.input}
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {!passwordVisible ? (
              <img
                src={EyeSlashIcon}
                className={css.icon}
                alt="Eye Slash"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <img
                src={EyeSharpIcon}
                className={css.icon}
                alt="Eye Sharp"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <div className={css.inp}>
            <input
              type={passwordVisible1 ? "text" : "password"}
              className={css.input}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
            />
            {!passwordVisible1 ? (
              <img
                src={EyeSlashIcon}
                className={css.icon}
                alt="Eye Slash"
                onClick={togglePasswordVisibility1}
              />
            ) : (
              <img
                src={EyeSharpIcon}
                className={css.icon}
                alt="Eye Sharp"
                onClick={togglePasswordVisibility1}
              />
            )}
          </div>
        </div>
        <button className={css.btn} onClick={handleSubmit}>
          Create account
        </button>
        <Link to="/signin" className={css.link}>
          LOG IN
        </Link>
        {error && <div className={css.error}>{error}</div>}
      </div>
    </div>
  );
};
