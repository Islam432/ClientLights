// Footer.tsx
import React from 'react';
import css from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <div className={css.footer}>
      <div className={css.block}>О нас</div>
      <div className={css.block}>
        Контакты:
        <div>Телефон: +1 123 456 7890</div>
        <div>Email: info@example.com</div>
      </div>
    </div>
  );
};

export default Footer;
