// Footer.tsx
import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
   <div className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.block}>
        <p>Gyeonggi-do is a dynamic South Korean province, embracing cultural heritage, urban vibrancy, and scenic landscapes around Seoul.</p>
        <p>Khayah is a development NGO that nurtures and serves people</p>
        <p>THE Tech is an engineering company that provides robust, innovative solutions.</p>
      </div>
      <div className={styles.block2}>
        <h3 style={{ color:"white"}}>Websites</h3>
        <div className={styles.cont}>
        <a href="">www.english.gg.go.kr</a>
        <a href="">www.khayah.org</a>
        <a href="">www.thetechkg.com</a>
        </div>
        
      </div>
      <div className={styles.block3}>
      <h3 style={{ color:"white"}}>Contact Us</h3>
      <div  className={styles.cont}>
      <a>+82 070-5121-2198</a>
      <a>+82 82-31-120</a>
      <a>+82 10-4282-9240</a>
      </div>
      
      </div>
      <div className={styles.block4}>© 2024 Smart Crosswalk. All Rights Reserved.</div>

      
    </div>
    
   </div>
  );
};

export default Footer;
