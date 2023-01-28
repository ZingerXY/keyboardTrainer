import React from "react";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import {RegistrationFormWrapper} from "../../components/AuthorizationForms/RegistrationFormWrapper";

const Registration = ({onClose}) => {
  return (
    <ModalWindow>
      <RegistrationFormWrapper onClose={onClose}/>
    </ModalWindow>
  )
}

export default Registration;
