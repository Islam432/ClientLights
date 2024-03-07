import { useContext, useState } from 'react';
import css from './index.module.css'
import { AppContext } from '../../App';

function DeleteAccount2 () {
    const { auth }= useContext(AppContext)
    return (
        <>
        <div className={css.container}>
            <div className={css.content}>
                <img src="../../../public/mainComponentImage/close.svg" alt="close" className={css.close}/>
                <img className={css.done} src="../../../public/mainComponentImage/done.svg" alt="done" />
                <p>Your account is deleted</p>
                <div>
                    <button onClick={auth.logout} className={css.btnLogout}>LogOut</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default DeleteAccount2;