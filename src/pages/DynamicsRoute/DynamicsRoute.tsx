import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import style from './index.module.css'
const DynamicsRoute = () => {
const {id} = useParams()
    
console.log(id)
  return (
    <div className={style.conteiner}>DynamicsRoute</div>
  )
}

export default DynamicsRoute