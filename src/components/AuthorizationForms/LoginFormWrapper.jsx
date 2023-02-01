import styles from "./style.module.scss";
import {Xmark} from "../Xmark/Xmark";
import React from "react";
import {LoginForm} from "./LoginForm";

export const LoginFormWrapper = ({onClose, goToRegistration}) => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={`${styles.window}`}>
        <Xmark onClose={onClose} />
        <LoginForm goToRegistration={goToRegistration} onClose={onClose} />
      </div>
    </div>
  );
}