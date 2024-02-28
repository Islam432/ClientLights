import React from 'react'
import style from './SystemModules.module.css'
import CardSystems from '../../components/CardSystems/CardSystems'
const SystemModules = () => {

    const data = {
        cardOne: {
            id:1,
            title: "ID: 01A-B",
            location:"Адрес: ул. Ахунбаева/ул. Безымянная"
        },
        cardTwo:{
            id:2,
            title: "ID: 02A-B",
            location:"Адрес: ул. Ахунбаева/ул. Безымянная"
        },
        cardTree:{
            id:3,
            title: "ID: 01T",
            location:"Адрес: ул. Тыналиева 1/2"
        },
        cardFour:{
            id:4,
            title: "ID: 02T",
            location:"Адрес: ул. Тыналиева 1/2"
        },

    }
        

    
  return (
    <div className={style.conteiner}>
<div className={style.blok}>
   
    <div className={style.underBlok}> <header>Please  Pick a System</header></div>

<div className={style.underblokist}>
    
    <div className={style.minBlok}>
    <CardSystems data = {data.cardOne}/>
    <CardSystems data = {data.cardTwo}/>
    </div>
    <span className={style.rigtangle}/>

<div  className={style.minBlok}>
<CardSystems data = {data.cardTree}/>
<CardSystems data = {data.cardFour}/>
</div>


</div>


</div>
    </div>
  )
}

export default SystemModules