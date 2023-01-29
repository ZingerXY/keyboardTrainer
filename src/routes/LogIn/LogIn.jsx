import React from "react";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import {LoginFormWrapper} from "../../components/AuthorizationForms/LoginFormWrapper";

const LogIn = ({onClose, goToRegistration}) => {
  return (
    <ModalWindow>
      <LoginFormWrapper
        onClose={onClose}
        goToRegistration={goToRegistration}
      />
    </ModalWindow>
  )
}

export default LogIn;