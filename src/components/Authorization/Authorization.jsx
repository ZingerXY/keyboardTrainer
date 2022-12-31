import React from "react";
import './Authorization.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";

const Authorization = () => {
  return (
    <div className="content">
        <div className="window"> 
        <div className="Xmark">
            <FontAwesomeIcon icon={faXmark} color="#00A876"  size="1x"/>
            </div>
            <div className="form">
                <form>
                    <label>
                    <p className="reg-text margin"> АВТОРИЗАЦИЯ</p>
                    <p className="input-text margin">EMAIL:</p>
                    <input className="margin" type="email" name="email"  placeholder="test@test.ru"/>
                    <p className="input-text margin">ПАРОЛЬ:</p>
                    <input className="margin" type="password" name="password"  placeholder="12345678"/>
                    </label>
                    <p><input className="btn margin" type="submit" value="ВХОД" /></p>
                </form>
               <p className="reg-black margin">Если у вас еще нет аккаунта <a href="#">зарегистрируйтесь в системе</a></p> 
            </div>
        </div>
</div>
  );
};

export default Authorization