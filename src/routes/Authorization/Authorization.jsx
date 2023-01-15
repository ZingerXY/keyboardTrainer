import React, {useState} from 'react';
import LogIn from '../LogIn/LogIn';
import Registration from '../Registration/Registration';

const Authorization = () => {
  const [isLogInOpen, setIsLogInOpen] = useState(false);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);

  const goToRegistration = () => {
    setIsLogInOpen(false)
    setIsRegistrationOpen(true);
  }

  return (
    <>
      <button
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
        />
      }
    </>
  )
}

export default Authorization;