import React, { useState } from 'react';
import LogIn from '../LogIn/LogIn';
import Registration from '../Registration/Registration';
import Style from "./Authorization.module.scss";

const Authorization = () => {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const goToRegistration = () => {
    setIsLogInOpen(false)
    setIsRegistrationOpen(true);
  }
  const goToLogIn = () => {
    setIsLogInOpen(true)
    setIsRegistrationOpen(false);
  }

  return (
    <>
      <button className={`${Style["Authorization-button"]}`}
        onClick={() => setIsLogInOpen(true)}
      >Войти</button>
      {
        isLogInOpen &&
        <LogIn
          onClose={() => setIsLogInOpen(false)}
          goToRegistration={goToRegistration}
        />
      }
      {
        isRegistrationOpen &&
        <Registration
          onClose={() => setIsRegistrationOpen(false)}
          goToLogIn={goToLogIn}
        />
      }
    </>
  )
}

export default Authorization;