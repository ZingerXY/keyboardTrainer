import React from "react";
import './Registration.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark} from "@fortawesome/free-solid-svg-icons";

const Registration = () => {
  return (
    <div className="content">
        <div className="window"> 
        <div className="Xmark">
            <FontAwesomeIcon icon={faXmark} color="#00A876"  size="1x"/>
            </div>
            <div className="form">
            <form>
                <label>
                <p className="reg-text margin"> РЕГИСТРАЦИЯ</p>
                <p className="input-text margin">ИМЯ:</p> 
                <input className="margin" type="text" name="name" placeholder="ПЕТЯ" />
                <p className="input-text margin">EMAIL:</p>
                <input className="margin" type="email" name="email" placeholder="test@test.ru" />
                <p className="input-text margin">ПАРОЛЬ:</p>
                <input className="margin" type="password" name="pass" placeholder="12345678" />
                <p className="input-text margin">  ПОДТВЕРЖДЕНИЕ:</p>
                <input className="margin" type="password" name="confirmpass" placeholder="12345678" />
                </label>
                <p><input className="btn margin" type="submit" value="ЗАРЕГИСТРИРОВАТЬСЯ" /></p>
            </form>
            </div>
        </div>
</div>
  );
};

export default Registration
