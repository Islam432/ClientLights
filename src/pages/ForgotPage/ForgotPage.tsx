import css from "./ForgotPage.module.css"
import { Link } from "react-router-dom"
export default function ForgotPage() {
  return (
    <div className={css.container}>
        <div className={css.block}>
            <div className={css.forgot}>
            <h2 className={css.title}>Forgot your password?</h2>
            <p className={css.text}>Enter your email and we will send you the link to reset your password.</p>
            <input className={css.inp} placeholder=" Email"></input>
            <Link to="/link"><button className={css.btn}>Reset Password</button></Link>
            </div>
        </div>
    </div>
  )
}
