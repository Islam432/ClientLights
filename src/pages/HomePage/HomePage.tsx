import React from 'react';
import css from "./HomePage.module.css"
interface HomePageProps {
    // определите свои пропсы здесь, если есть
}

const HomePage: React.FC<HomePageProps> = () => {
    return (
         <div className={css.container}>
      <div className={css.block}>
        <h2>Добро пожаловать на главную страницу</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={css.squareBlock} style={{ width: '200px', height: '200px' }}>
        <h3>Блок 1</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={css.squareBlock} style={{ width: '150px', height: '150px' }}>
        <h3>Блок 2</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={css.squareBlock} style={{ width: '250px', height: '250px' }}>
        <h3>Блок 3</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className={css.squareBlock} style={{ width: '180px', height: '180px' }}>
        <h3>Блок 4</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    );
};

export default HomePage;
