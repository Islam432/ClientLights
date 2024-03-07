import css from "./LinkPage.module.css"
import { Link } from "react-router-dom"
import link from "../../assets/link.svg"
export default function LinkPage() {
  return (
    <div className={css.container}>
        <div className={css.block}>
            <div className={css.forgot}>
            <img className={css.img} src={link} alt="link" />
            <p className={css.text}>
            We sent you the link.  Please check your email.
            </p>
            <Link className={css.login} to="/signin">Log in</Link>
            </div>
        </div>
    </div>
  )
}
