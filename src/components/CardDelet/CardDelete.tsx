import { useContext, useState } from 'react';
import DeleteAccount2 from '../CardConfirmDelete/CardConfirmDelete';
import css from './index.module.css'
import { IoMdClose } from "react-icons/io";
import { AppContext } from '../../App';

interface ModalProps {
    onClose: () => void;
  }

const  DeleteAccount: React.FC<ModalProps>= ({ onClose }) => {
    
    const [open , setOpen] = useState(false)
   const hend  = () => {
    setOpen(prev => !prev)
   }
   const close=()=>{
    setOpen(false)
    onClose()
   }
    return (
        <>
         {open ? (
  <DeleteAccount2 />
) : (
  <div className={css.container}>
    <div className={css.content}>
        <IoMdClose onClick={onClose} className={css.close}/>
      {/* <img src="../../../public/mainComponentImage/close.svg" alt="close" className={css.close}/> */}
      <img className={css.trash} src="../../../public/mainComponentImage/trash.svg" alt="delete" />
      <p className={css.text}>Are you sure you want to delete your account?</p>
      <div>
        <button onClick={hend} className={css.btnYes}>Yes</button>
        <button className={css.btnNo} onClick={close}>No</button>
      </div>
    </div>
  </div>
)}
     
        </>
    )
}

export default DeleteAccount;