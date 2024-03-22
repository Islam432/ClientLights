import React from 'react'
import style from "./CardSystems.module.css"
import { NavLink } from 'react-router-dom';


interface typedatacard {
    id: number;
    title: string;
    location: string;
  }
  
  const CardSystems: React.FC<{ data: typedatacard }> = React.memo(({ data }) => {
   
  return (
    <NavLink to={`/systems/${data.id}`} className={style.navlink} >
    <div className={style.conteiner}>
        <div className={style.iconblok}>
       <span>
        <img src="../../../public/mainComponentImage/systemsIcon.png" alt="icon" />
       </span>
        </div>
        <div className={style.textblok}>
         <h2>{data.title}</h2>
         <p>
{data.location}
         </p>
        </div>
    </div>
    </NavLink>
  );
});

export default CardSystems