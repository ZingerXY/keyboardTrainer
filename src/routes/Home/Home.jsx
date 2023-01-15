import React, { useState } from "react";
import { KeyboardWrapper } from "../../components/KeyboardWrapper";
import Style from "./Home.module.scss";
import WarningDisplay from "../../components/WarningDisplay/WarningDisplay"

const Home = () => {
  const [isStringFinished, setIsStringFinished] = useState(false);
  const taskSettings = {
    type: 'words',
    amount: 5
  }

  return (
    <div className={`${Style["home-page"]}`}>
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