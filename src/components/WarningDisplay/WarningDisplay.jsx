import React from "react";
import Style from "./WarningDisplay.module.scss";

const WarningDisplay = () => {
  return <div className={`${Style["warning-dispay"]}`}>
    <div className={`${Style["warning-dispay_title"]}`}>Внимание</div>
    <div className={`${Style["warning-dispay_text"]}`}>Выполнение задания недоступно с мобильной версии браузера.</div>
  </div>
}

export default WarningDisplay