import css from "./LoginPage.module.css";
import { useContext, useEffect, useState } from "react";
import { SignUp } from "../../services/auth.service";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import CustomEyeOpenIcon from "../../assets/Opened.svg";
import CustomEyeClosedIcon from "../../assets/Eye.svg";
import { AppContext } from "../../App";
import Correct from "../../assets/Correct.svg";
import Incorrect from "../../assets/Incorrect.svg";
export default function LoginPage() {
  const navigate = useNavigate();
  const [cook, setCook] = useState(Cookies.get("token"));
  const { auth } = useContext(AppContext);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [data, setData] = useState({ email:  "" }); // Added password to the state
  const [pass, setPassword] = useState({ password:  "" });
  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  setPassword((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setError("");
  };
console.log(pass.password)
  const validatePassword = (password: string) => {
    setPasswordValid(
      password.length >= 8 &&
        /[A-Z]/.test(password) &&
        /[a-z]/.test(password) &&
        /\d/.test(password) &&
        /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)
    );
  };

  const onSubmit = async (): Promise<void> => {
    try {
      const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
      if (!emailRegex.test(data.email)) {
        setError("Invalid email format");
        return;
      }

      validatePassword(pass.password);

      if (!passwordValid) {
        setError("Password does not meet requirements");
        return;
      }

      const blok = { ...data, ...pass };
      console.log(blok)
      const dat = await SignUp(blok);
      console.log(dat.config.data);

      const newToken = dat.data.token;
      auth.login(dat.data.token);
      Cookies.set("token", newToken, {
        expires: 30,
      });
      setCook(newToken);
    } catch (error) {
      console.error("Error during SignUp:", error);
      setError("Invalid credentials");
    }
  };

  useEffect(() => {
    if (cook) {
      console.log("Redirecting to /");
      navigate("/");
    }
  }, [cook, navigate]);
  return (
    <div className={css.block}>
      <div className={css.card}>
        <h2 className={css.title}>Welcome!</h2>
        <div className={css.child}>
          <div className={css.inp}>
            <input
              type="email"
              className={css.input}
              placeholder="Email"
              onChange={handler}
              name="email"
            />
          </div>

          <div className={css.inp}>
            <input
              type={passwordVisible ? "text" : "password"}
              className={css.input}
              placeholder="Password"
              name="password"
              onChange={(e) => {
                handler(e);
                validatePassword(e.target.value);
              }}
            />
            {passwordValid ? (
              <img src={Correct} alt="Correct" className={css.icon1} />
            ) : (
              <img src={Incorrect} alt="Incorrect" className={css.icon1} />
            )}
            {!passwordVisible ? (
              <img
                src={CustomEyeClosedIcon}
                alt="Eye Closed"
                className={css.icon}
                onClick={togglePasswordVisibility}
              />
            ) : (
              <img
                src={CustomEyeOpenIcon}
                alt="Eye Open"
                className={css.icon}
                onClick={togglePasswordVisibility}
              />
            )}
          </div>
          <Link to="/forgot" className={css.pass}>
            Forgot password?
          </Link>
        </div>

        <button className={css.btn} onClick={onSubmit}>
          Log in
        </button>
        <Link to="/signap" className={css.link}>
          CREATE ACCOUNT
        </Link>
        {error && <div className={css.error}>{error}</div>}
      </div>
    </div>
  );
}
