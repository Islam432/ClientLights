import React from "react";
import { useLocation, useParams } from "react-router-dom";
import style from "./index.module.css";
const DynamicsRoute = () => {
  const { id } = useParams();

  console.log(id);
  return (
    <div className={style.conteiner}>
      <div className={style.blok}>
        <h2>Parameters</h2>
        <div className={style.minblok}>
          <div className={style.dataBlok}>
            <h3 className={style.title}>Voltage</h3>
            <p>Battery {}</p>
            <p>Solar Panel {}</p>
            <p>Sustem {}</p>
          </div>
          <div className={style.dataBlok}>
            <h3 className={style.title}>Power</h3>
            <p>Battery {}</p>
            <p>Solar Panel {}</p>
            <p>Sustem {}</p>
          </div>
        </div>

        <span className={style.rigtangle} />

        <div className={style.minblok}>
          <div className={style.dataBlok}>
            <h3 className={style.title}>Current</h3>
            <p>Battery {}</p>
            <p>Solar Panel {}</p>
            <p>Sustem {}</p>
          </div>
          <div className={style.dataBlok}>
            <h3 className={style.title}>Temperature</h3>
            <p>Battery {}</p>
          </div>
        </div>
        <p className={style.battery}>Remaining Battery: {}</p>
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