import { Link } from "react-router-dom"
import css from "./header.module.css"
export default function Header() {
  return (
    <div className={css.header}>
      <Link to="/homepage" className={css.link}>
        <div className={css.block}>Главная</div>
      </Link>
      <Link to="/lights" className={css.link}>
        <div className={css.block}>Светофоры</div>
      </Link>
      <Link to="/about" className={css.link}>
        <div className={css.block}>О нас</div>
      </Link>
      <Link to="/signin" className={css.link}>
        <div className={css.block}>Логин</div>
      </Link>
    </div>
  )}