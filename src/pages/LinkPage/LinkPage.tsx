import css from "./LinkPage.module.css"
import { Link } from "react-router-dom"
import link from "../../assets/link.svg"
export default function LinkPage() {
  return (
    <div className={css.container}>
        <div className={css.block}>
        <img className={css.img} src={link} alt="link" />
            <div className={css.forgot}>
            
            <p className={css.text}>
            We sent you the link. 
            
          <p className={css.text}>
           Please check your email.
          </p>
            </p>
            <Link className={css.login} to="/signin">Log in</Link>
            </div>
        </div>
    </div>
  )
}
