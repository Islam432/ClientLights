import React from "react";
import { useLocation, useParams } from "react-router-dom";
import style from "./index.module.css";
const DynamicsRoute = () => {
  const { id } = useParams();
  const example="000"

  console.log(id);
  return (
    <div className={style.conteiner}>
      <div className={style.blok}>
        <h2>Parameters</h2>
        <div className={style.minblok}>
          <div className={style.dataBlok}>
            <h3 className={style.title}>Voltage</h3>
            <p>Battery: <span className={style.ex}>{example}</span> </p>
            <p>Solar Panel: <span className={style.ex}>{example}</span></p>
            <p>Sustem: <span className={style.ex}>{example}</span></p>
          </div>
          <div className={style.dataBlok}>
            <h3 className={style.title}>Power</h3>
            <p>Battery: <span className={style.ex}>{example}</span></p>
            <p>Solar Panel: <span className={style.ex}>{example}</span></p>
            <p>Sustem: <span className={style.ex}>{example}</span></p>
          </div>
        </div>

        <span className={style.rigtangle} />

        <div className={style.minblok}>
          <div className={style.dataBlok}>
            <h3 className={style.title}>Current</h3>
            <p>Battery: <span className={style.ex}>{example}</span></p>
            <p>Solar Panel: <span className={style.ex}>{example}</span></p>
            <p>Sustem: <span className={style.ex}>{example}</span></p>
          </div>
          <div className={style.dataBlok}>
            <h3 className={style.title}>Temperature</h3>
            <p>Battery: <span className={style.ex}>{example}</span></p>
          </div>
        </div>
        <p className={style.battery}>Remaining Battery: <span className={style.ex}>100%</span>{}</p>
      </div>
      <div className={style.blok2}>
<h4>ID: 01A-B</h4>

<div className={style.blokimg}>
  <img  src="../../../public/mainComponentImage/imageLight.jpg" alt="" />
</div>

      </div>
    </div>
  );
};

export default DynamicsRoute;