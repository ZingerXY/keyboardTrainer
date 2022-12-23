import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'
const Header = () => {
  return (
    <header className="App-header">
      <nav className="nav container">
        <Link to={"/"} className="nav_logo">
          <div className="logo_img">
            <img className="logo" src="./img/LOGO.svg" alt="logo" />
          </div>
          <div className="logo_name">
            <h1 className="logo_name_item">KANGAROO</h1>
            <p className="logo_title">КЛАВИАТУРНЫЙ ТРЕНАЖЕР</p>
          </div>
        </Link>

        {/* пока временно для демо версии */}
        <div className="nav_links">

          <Link to={"/tasks"} className="nav_links_title">Задания</Link>
          <Link to={"/stats"} className="nav_links_title">Статистика</Link>
          <Link to={"/rating"} className="nav_links_title">Рейтинг</Link>
          <Link to={"/quit"} className="nav_links_title">Выйти</Link>
        </div>
      </nav>

    </header>
  );
};

export default Header
