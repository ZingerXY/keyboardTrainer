import React from "react";
import Style from "./Authorization.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";

const Authorization = () => {
  return (
    <div className={`content`}>
      <div className={`${Style["window"]}`}> 
        <div className={`${Style["Xmark"]}`}>
          <div className={`${Style["X"]}`}>
            <FontAwesomeIcon icon={faXmark} color="#00A876"  size="1x"/>
          </div>
        </div>
        <div className={`${Style["form"]}`}>
          <form>
            <label>
            <p className={`${Style["reg-text"]} ${Style["margin"]}`}> АВТОРИЗАЦИЯ</p>
            <p className={`${Style["input-text"]} ${Style["margin"]}`}>EMAIL:</p>
            <input className={`${Style["margin"]} ${Style["input"]}`} type="email" name="email"  placeholder="test@test.ru"/>
            <p className={`${Style["input-text"]} ${Style["margin"]}`}>ПАРОЛЬ:</p>
            <input className={`${Style["margin"]} ${Style["input"]}`} type="password" name="password"  placeholder="12345678"/>
            </label>
            <p><input className={`${Style["btn"]} ${Style["margin"]}`} type="submit" value="ВХОД" /></p>
          </form>
          <p className={`${Style["reg-black"]} ${Style["margin"]}`}>Если у вас еще нет аккаунта <a href="#">зарегистрируйтесь в системе</a></p> 
        </div>
      </div>
    </div>
  );
};

export default Authorization