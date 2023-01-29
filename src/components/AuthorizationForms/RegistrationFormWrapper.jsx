import styles from "./style.module.scss";
import React from "react";
import {RegistrationForm} from "./RegistrationForm";
import {Xmark} from "../Xmark/Xmark";

export const RegistrationFormWrapper = ({onClose}) => {
  return (
    <div className={`container ${styles.container}`}>
      <div className={`${styles.window}`}>
        <Xmark onClose={onClose} />
        <RegistrationForm onClose={onClose} />
      </div>
    </div>
  );
};