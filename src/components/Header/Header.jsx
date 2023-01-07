import React from "react";
import { Link } from "react-router-dom";
import './Header.scss'
import { useState } from "react";

const Header = () => {

  const [visible, setVisible] = useState(false);

  function toggleVisible() {
    visible ? setVisible(false) : setVisible(true);
  }


  return (
    <header className="App-header">
      <div className="container header-container">
        <nav className="nav">
          <Link to={"/"} className="nav_logo">
            <div className="logo_img">
              <img className="logo" src="./img/Logo.svg" alt="logo" />
            </div>
            <div className="logo_name">
              <h1 className="logo_name_item">KANGAROO</h1>
              <p className="logo_title">КЛАВИАТУРНЫЙ ТРЕНАЖЕР</p>
            </div>
          </Link>

          {/* пока временно для демо версии */}
          <div className="nav_links">
            <Link to={"/tasks"} className="nav_links_title">Задания</Link>
            <Link to={"/stats/speed"} className="nav_links_title">Статистика</Link>
            <Link to={"/rating"} className="nav_links_title">Рейтинг</Link>
            <Link to={"/quit"} className="nav_links_title">Выйти</Link>
          </div>
          <div className="burger_button" onClick={toggleVisible}>
            <svg width="32" height="23" viewBox="0 0 32 23" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 23V20.31H32V23H0ZM0 12.76V10.07H32V12.76H0ZM0 2.69V0H32V2.69H0Z" />
            </svg>
          </div>
          <div className={visible ? "burger_list" : "hidden"}>
            <Link to={"/tasks"} className="burger_links">Задания</Link>
            <Link to={"/stats/speed"} className="burger_links">Статистика</Link>
            <Link to={"/rating"} className="burger_links">Рейтинг</Link>
            <Link to={"/quit"} className="burger_links">Выйти</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header
