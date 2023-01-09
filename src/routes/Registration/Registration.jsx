import React from "react";
import Style from "./Registration.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
  return (
    <div className={`container ${Style["container"]}`}>
      <div className={`${Style["window"]}`}> 
        <div className={`${Style["Xmark"]}`}>
          <div className={`${Style["X"]}`}>
            <FontAwesomeIcon  icon={faXmark} color="#00A876"  size="1x"/>
          </div>
        </div>
        <div >
          <form className={`${Style["form"]}`}>
              <label>
                <p className={`${Style["reg-text"]} ${Style["margin"]}`}> РЕГИСТРАЦИЯ</p>
                <p className={`${Style["input-text"]} ${Style["margin"]}`}>ИМЯ:</p> 
                <input className={`${Style["margin"]} ${Style["input"]}`} type="text" name="name" placeholder="ПЕТЯ" />
                <p className={`${Style["input-text"]} ${Style["margin"]}`}>EMAIL:</p>
                <input className={`${Style["margin"]} ${Style["input"]}`} type="email" name="email" placeholder="test@test.ru" />
                <p className={`${Style["input-text"]} ${Style["margin"]}`}>ПАРОЛЬ:</p>
                <input className={`${Style["margin"]} ${Style["input"]}`} type="password" name="pass" placeholder="12345678" />
                <p className={`${Style["input-text"]} ${Style["margin"]}`}>  ПОДТВЕРЖДЕНИЕ:</p>
                <input className={`${Style["margin"]} ${Style["input"]}`} type="password" name="confirmpass" placeholder="12345678" />
              </label>
              <p><input className={`${Style["btn"]} ${Style["margin"]}`} type="submit" value="ЗАРЕГИСТРИРОВАТЬСЯ" /></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration
