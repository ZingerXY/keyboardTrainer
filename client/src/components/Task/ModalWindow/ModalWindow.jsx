import React from 'react';
import Style from "../Task.module.scss";
import ModalWindowStyles from "./ModalWindow.module.scss";
import ReactDOM from 'react-dom';

const ModalWindow = () => {
  
  return ReactDOM.createPortal(
    <>
      <div className={`${ModalWindowStyles.blur}`}/>
      <div className={`${ModalWindowStyles.container}`}>
          <div className={`${Style["task-title"]}`}>Задание <span className={`${Style["task-title_number"]}`}>#1</span></div>
          <div className={`${Style["task-info"]}`}><p>Количество ошибок:</p><span className={`${Style["task-info_mistakes"]}`}></span></div>
          <div className={`${Style["task-info"]}`}><p>Текущая скорость:</p><span className={`${Style["task-info_speed"]}`}></span></div>
          <div className={`${Style["task-info"]}`}><p>Время:</p><span className={`${Style["task-info_time"]}`}></span></div>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ModalWindow;
