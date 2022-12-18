import React from "react";
import './Header.scss'
const Header = () => {
  return (
    <header className="App-header">
      <div className="nav container">
        <div className="nav_logo">
          <img className='logo_img' src="./img/LOGO.svg" alt="logo" />
          <div className="logo_name">
            <h1 className="logo_name_item">KANGAROO</h1>
            <p className="logo_title">КЛАВИАТУРНЫЙ ТРЕНАЖЕР</p>
          </div>
        </div>

        {/* пока временно для демо версии */}
        <div className="nav_links">
          <h2 className="nav_links_title">Задания</h2>
          <h2 className="nav_links_title">Статистика</h2>
          <h2 className="nav_links_title">Выйти</h2>
        </div>
      </div>

    </header>
  );
};

export default Header
