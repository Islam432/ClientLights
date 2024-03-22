import css from "./SignupPage.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import EyeSlashIcon from "../../assets/Eye.svg";
import EyeSharpIcon from "../../assets/Opened.svg";

export const AufPage = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passwordVisible1, setPasswordVisible1] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const validateEmail = () => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const togglePasswordVisibility1 = () => {
    setPasswordVisible1((prev) => !prev);
  };

  const handleEmailChange = (e:any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e:any) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e:any) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (!validateEmail()) {
      setError("Invalid email format");
      return;
    }

    if (!validatePassword()) {
      setError(
        "Invalid password format. Password must be at least 8 characters long, contain at least one lowercase letter, one uppercase letter, at least one digit, and at least one special character."
      );
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Reset error on successful submission
    setError("");

    // Add your submission logic here
    // For example, call your SignUp function
    // SignUp({ email, password, confirmPassword });

    // Rest of your code...
  };

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
              <img src={EyeSlashIcon} className={css.icon} alt="Eye Slash" onClick={togglePasswordVisibility} />
            ) : (
              <img src={EyeSharpIcon} className={css.icon} alt="Eye Sharp" onClick={togglePasswordVisibility} />
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
              <img src={EyeSlashIcon} className={css.icon} alt="Eye Slash" onClick={togglePasswordVisibility1} />
            ) : (
              <img src={EyeSharpIcon} className={css.icon} alt="Eye Sharp" onClick={togglePasswordVisibility1} />
            )}
          </div>
        </div>
        <button className={css.btn} onClick={handleSubmit}>
          Create account
        </button>
        <Link to="/signin" className={css.link}>
          LOG IN
        </Link>
        {error && (
          <div className={css.error}>
           <p className={css.errortext}> {error}</p>
          </div>
        )}
      </div>
    </div>
  );
};
