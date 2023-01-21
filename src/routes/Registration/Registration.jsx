import React from "react";
import ModalWindow from "../../components/ModalWindow/ModalWindow";
import {RegistrationForm} from "../../components/RegistrationForm/RegistrationForm";

const Registration = ({onClose}) => {
  return (
    <ModalWindow>
      <RegistrationForm onClose={onClose}/>
    </ModalWindow>
  )
}

export default Registration;
