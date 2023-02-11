import React from "react";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import {RegistrationFormWrapper} from "../../components/AuthorizationForms/RegistrationFormWrapper";

const Registration = ({onClose, goToLogIn}) => {
  return (
    <ModalWindow>
      <RegistrationFormWrapper
        onClose={onClose}
        goToLogIn={goToLogIn}
        />
    </ModalWindow>
  )
}

export default Registration;
