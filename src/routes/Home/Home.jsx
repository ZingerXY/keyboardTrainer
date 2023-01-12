import React, { useState } from "react";
import { KeyboardWrapper } from "../../components/KeyboardWrapper";
import Style from "./Home.module.scss";
import WarningDisplay from "../../components/WarningDisplay/WarningDisplay"
import ModalWindow from "../../components/ModalWindowForTestResult.jsx/ModalWindow";

const Home = () => {
  const [isStringFinished, setIsStringFinished] = useState(false);
  const taskSettings = {
    type: 'words',
    amount: 5
  }
  // const [typeSpeed, setTypeSpeed] = useState(0);

  return (
    <div className={`${Style["home-page"]}`}>
      {/* {isStringFinished && 
          <ModalWindow
              setIsStringFinished={setIsStringFinished}
              typeSpeed={typeSpeed}
          />
      } */}
      <WarningDisplay />
      <KeyboardWrapper
        isStringFinished={isStringFinished}
        setIsStringFinished={setIsStringFinished}
        taskSettings={taskSettings}
      />
    </div>
  )
}

export default Home