import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.block}>
          <div style={{paddingTop:'60px',gap:'25px',display:'flex',flexDirection:'column'}}>

          
          <p >
            Gyeonggi-do is a dynamic South Korean province, embracing cultural
            heritage, urban vibrancy, and scenic landscapes around Seoul.
          </p>
          <p>Khayah is a development NGO that nurtures and serves people</p>
          <p>
            THE Tech is an engineering company that provides robust, innovative
            solutions.
          </p>
          </div>
        </div>
        <div className={styles.block2}>
          <h3 className={styles.title}>Websites</h3>
          <div className={styles.cont}>
            <a className={styles.ff} href="">www.english.gg.go.kr</a>
            <a className={styles.ff} href="">www.khayah.org</a>
            <a className={styles.ff} href="">www.thetechkg.com</a>
          </div>
        </div>
        <div className={styles.block3}>
          <h3 className={styles.title}>Contact Us</h3>
          <div className={styles.cont}>
            <a className={styles.fff}>+82 070-5121-2198</a>
            <a className={styles.fff}>+82 82-31-120</a>
            <a className={styles.fff}>+82 10-4282-9240</a>
          </div>
        </div>
        <div className={styles.block4}>
          © 2024 Smart Crosswalk. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
