import React, { useState, ChangeEvent } from "react";
import css from "./ChangePage.module.css";
import yes from "../../assets/yes.svg";
import Eye from "../../assets/Eye.svg";
import Opened from "../../assets/Opened.svg";  // Corrected the import name
import Incorrect from "../../assets/Incorrect.svg";
import Correct from "../../assets/Correct.svg";

export default function ChangePage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Perform validation and set passwordValid accordingly
    setPasswordValid(
      newPassword.length >= 8 &&
      /[A-Z]/.test(newPassword) &&
      /[a-z]/.test(newPassword) &&
      /\d/.test(newPassword) &&
      /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newPassword)
    );
  };

  const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newConfirmPassword = event.target.value;
    setConfirmPassword(newConfirmPassword);

    // Perform validation and set confirmPasswordValid accordingly
    setConfirmPasswordValid(newConfirmPassword === password);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };

  return (
    <div className={css.container}>
      <div className={css.block1}>
      
           {/* <h2 className={css.title}>Change Password</h2> */}
            <div className={css.listblock}>
            <h2 className={css.title}>Change Password</h2>
            <div className={css.list}>
            <p className={css.text}>Password must contain:</p>
                <img src={yes} alt="icon" className={css.img}/>
                <span>At least 8 characters</span>
            </div>
            <div className={css.list}>
              
                <img src={yes} alt="icon" className={css.img}/>
                <span> At least 1 uppercase letter</span>
            </div>
            <div className={css.list}>
                <img src={yes} alt="icon"className={css.img} />
                <span>At least 1 lowercase letter</span>
            </div>
            <div className={css.list}>
                <img src={yes} alt="icon"className={css.img} />
                <span>At least 1 special character (@#!$...)</span>
            </div><div className={css.list}>
                <img src={yes} alt="icon"className={css.img} />
                <span>At least 1 number</span>
            </div>
            </div>
      </div>
      <div className={css.block2}>
        <div className={css.inpBlock}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="New Password"
            className={css.inp}
            onChange={handlePasswordChange}
          />
          {passwordValid ? (
            <img className={css.correct} src={Correct} alt="cor" />
          ) : (
            <img className={css.incorrect} src={Incorrect} alt="incor" />
          )}
          <img
            className={css.eye}
            src={showPassword ? Opened : Eye}
            alt="eye"
            onClick={togglePasswordVisibility}
          />
        </div>
        <div className={css.inpBlock}>
          <input
            type={showPassword1 ? "text" : "password"}
            placeholder="Confirm Password"
            className={css.inp}
            onChange={handleConfirmPasswordChange}
          />
          {confirmPasswordValid ? (
            <img className={css.correct} src={Correct} alt="cor" />
          ) : (
            <img className={css.incorrect} src={Incorrect} alt="incor" />
          )}
          <img
            className={css.eye}
            src={showPassword1 ? Opened : Eye}
            alt="eye"
            onClick={togglePasswordVisibility1}
          />
        </div>
        <button className={css.btn} disabled={!passwordValid || !confirmPasswordValid}>
          Save
        </button>
      </div>
      {confirmPassword !== "" && !confirmPasswordValid && (
        <p className={css.passw}>Passwords do not match</p>
      )}
    </div>
  );
}
