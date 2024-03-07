import React from 'react'
import css from "./SystemsPage.module.css"
import group from "../../assets/Group.svg"
export default function SystemsPage() {
  return (
    <div className={css.block}>
        <h2>Please  Pick a System</h2>
        <div className={css.systems}>
        <img className={css.icon} src={group}></img>
                <img className={css.icon} src={group}></img>
                <img className={css.icon} src={group}></img>
                <img className={css.icon} src={group}></img>
            <div className={css.child}>
                {/* <img className={css.icon} src={group}></img>
                <img className={css.icon} src={group}></img>
                <img className={css.icon} src={group}></img>
                <img className={css.icon} src={group}></img> */}
            </div>
        </div>
    </div>
  )
}
