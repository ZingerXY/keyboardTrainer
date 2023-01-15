import React from 'react';
import TaskStyle from "../Task.module.scss";
import ResultModalWindowStyles from "./ResultModalWindow.module.scss";
import { useSelector } from 'react-redux';
import ModalWindow from "../../ModalWindow/ModalWindow";

const ResultModalComponent = ({
    setIsStringFinished,
    typeSpeed
  }) => {
  const { uncorrect } = useSelector((state) => state.DataReducer);
  const { seconds, minutes } = useSelector((state) => state.TimeReducer);
  
  return (
    <div className={`${ResultModalWindowStyles.container}`}>
        <div className={`${TaskStyle["task-title"]}`}>Задание <span className={`${TaskStyle["task-title_number"]}`}>#1</span></div>
        <div className={`${TaskStyle["task-info"]}`}><p>Количество ошибок:</p><span className={`${TaskStyle["task-info_mistakes"]}`}>{uncorrect}</span></div>
        <div className={`${TaskStyle["task-info"]}`}><p>Текущая скорость:</p><span className={`${TaskStyle["task-info_speed"]}`}>{typeSpeed}</span></div>
        <div className={`${TaskStyle["task-info"]}`}><p>Время:</p><span className={`${TaskStyle["task-info_time"]}`}>{minutes}:{`${seconds < 10 ? '0' : ''}`}{seconds}</span></div>
        <button
          onClick={() => setIsStringFinished(false)}
        >Try again</button>
    </div>
  )
}

const ResultModalWindow = ({setIsStringFinished, typeSpeed}) => {
  return (
    <ModalWindow>
      <ResultModalComponent
        setIsStringFinished={setIsStringFinished}
        typeSpeed={typeSpeed}
      />
    </ModalWindow>
  )
}

export default ResultModalWindow;
