import React, {useState} from "react";
import Style from "./LogIn.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";
import ModalWindow from "../../components/ModalWindow/ModalWindow";

const LogInForm = ({onClose, goToRegistration}) => {

  return  (
    <div className={`container ${Style["container"]}`}>
      <div className={`${Style["window"]}`}> 
        <div className={`${Style["Xmark"]}`}>
          <div
            onClick={() => onClose()}
            className={`${Style["X"]}`}
          >
            <FontAwesomeIcon icon={faXmark} color="#00A876"  size="1x"/>
          </div>
        </div>
        <div className={`${Style["form"]}`}>
          <form className={`${Style["form"]}`}>
            <label>
              <p className={`${Style["reg-text"]} ${Style["margin"]}`}> АВТОРИЗАЦИЯ</p>
              <p className={`${Style["input-text"]} ${Style["margin"]}`}>EMAIL:</p>
              <input className={`${Style["margin"]} ${Style["input"]}`} type="email" name="email"  placeholder="test@test.ru"/>
              <p className={`${Style["input-text"]} ${Style["margin"]}`}>ПАРОЛЬ:</p>
              <input className={`${Style["margin"]} ${Style["input"]}`} type="password" name="password"  placeholder="12345678"/>
            </label>
            <p><input className={`${Style["btn"]} ${Style["margin"]}`} type="submit" value="ВХОД" /></p>
          </form>
          <p className={`${Style["reg-black"]} ${Style["margin"]}`}
          >Если у вас еще нет аккаунта 
            <button 
              onClick={() => goToRegistration()}
              className={`${Style.redirect_button}`}
            > зарегистрируйтесь в системе</button>
          </p> 
        </div>
      </div>
    </div>
  );
}

const LogIn = ({onClose, goToRegistration}) => {

  return (
    <ModalWindow>
      <LogInForm
        onClose={onClose}
        goToRegistration={goToRegistration}
      />
    </ModalWindow>
  )
}

export default LogIn;