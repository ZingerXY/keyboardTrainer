import Style from "./style.module.scss";
import React from "react";
import {RegistrationForm} from "./RegistrationForm";
import {Xmark} from "../Xmark/Xmark";

export const RegistrationFormWrapper = ({onClose, goToLogIn}) => {
  return (
    <div className={`container ${Style.container}`}>
      <div className={`${Style.window}`}>
        <Xmark onClose={onClose} />
        <RegistrationForm goToLogIn={goToLogIn} onClose={onClose} />
      </div>
    </div>
  );
};