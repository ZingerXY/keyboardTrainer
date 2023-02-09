import React from 'react';
import TaskStyle from "../Task.module.scss";
import ResultModalWindowStyles from "./ResultModalWindow.module.scss";
import { useSelector } from 'react-redux';
import ModalWindow from "../../ModalWindow/ModalWindow";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ResultModalComponent = ({
    setIsStringFinished,
    typeSpeed,
    goToTasks,
  }) => {
  const { uncorrect } = useSelector((state) => state.DataReducer);
  const { seconds, minutes } = useSelector((state) => state.TimeReducer);
  
  return (
    <div className={`${ResultModalWindowStyles.container}`}>
        <ArrowBackIcon onClick={() => goToTasks()}/>
        <div className={`${TaskStyle["task-info"]}`}>Результаты</div>
        <div className={`${TaskStyle["task-info"]}`}><p>Количество ошибок:</p><span className={`${TaskStyle["task-info_mistakes"]}`}>{uncorrect}</span></div>
        <div className={`${TaskStyle["task-info"]}`}><p>Текущая скорость:</p><span className={`${TaskStyle["task-info_speed"]}`}>{typeSpeed}</span></div>
        <div className={`${TaskStyle["task-info"]}`}><p>Время:</p><span className={`${TaskStyle["task-info_time"]}`}>{minutes}:{`${seconds < 10 ? '0' : ''}`}{seconds}</span></div>
        <p className={`${TaskStyle["result-btn"]}`}
          onClick={() => setIsStringFinished(false)}
        >Повторить</p>
    </div>
  )
}


const ResultModalWindow = ({setIsStringFinished, typeSpeed, goToTasks}) => {
  return (
    <ModalWindow>
      <ResultModalComponent
        setIsStringFinished={setIsStringFinished}
        typeSpeed={typeSpeed}
        goToTasks={goToTasks}
      />
    </ModalWindow>
  )
}

export default ResultModalWindow;
