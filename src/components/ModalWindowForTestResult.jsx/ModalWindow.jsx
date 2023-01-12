import React from 'react';
import Style from "../Task/Task.module.scss";
import ModalWindowStyles from "./ModalWindow.module.scss";
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';

const ModalWindow = ({
    setIsStringFinished,
    typeSpeed
  }) => {
  const { uncorrect } = useSelector((state) => state.DataReducer);
  const { seconds, minutes } = useSelector((state) => state.TimeReducer);
  
  return ReactDOM.createPortal(
    <>
      <div className={`${ModalWindowStyles.blur}`}/>
      <div className={`${ModalWindowStyles.container}`}>
          <div className={`${Style["task-title"]}`}>Задание <span className={`${Style["task-title_number"]}`}>#1</span></div>
          <div className={`${Style["task-info"]}`}><p>Количество ошибок:</p><span className={`${Style["task-info_mistakes"]}`}>{uncorrect}</span></div>
          <div className={`${Style["task-info"]}`}><p>Текущая скорость:</p><span className={`${Style["task-info_speed"]}`}>{typeSpeed}</span></div>
          <div className={`${Style["task-info"]}`}><p>Время:</p><span className={`${Style["task-info_time"]}`}>{minutes}:{`${seconds < 10 ? '0' : ''}`}{seconds}</span></div>
          <button
            className={`${ModalWindowStyles}`}
            onClick={() => setIsStringFinished(false)}
          >Try again</button>
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default ModalWindow;
