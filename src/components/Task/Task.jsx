import React, { useEffect, useState } from "react"
import Style from "./Task.module.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { KeyboardWrapper } from "../KeyboardWrapper";
import { useSelector, useDispatch } from "react-redux";
import WarningDisplay from "../WarningDisplay/WarningDisplay";
import ResultModalWindow from './ResultModalWindow.jsx/ResultModalWindow';
import Selector from '../../components/Selector/Selector';
import { set_language, set_language_keys } from "../../store/data/dataSlice";
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const languages = {
    'English': {
        topLeftCharacter: '§',
        keys: `qwertyuiop[]asdfghjkl;'zxcvbnm,./`
    },
    'Русский': {
        topLeftCharacter: 'ё', 
        keys: `йцукенгшщзхъфывапролджэёячсмитьбю/`
    }
  }

const Task = ({taskSettings, goToTasks}) => {
    const { uncorrect, correct, language } = useSelector((state) => state.DataReducer);
    const { seconds, minutes } = useSelector((state) => state.TimeReducer);
    const [typeSpeed, setTypeSpeed] = useState(0);
    const [isStringFinished, setIsStringFinished] = useState(false);
    const dispatch = useDispatch();

    const setLanguage = (language) => {
        dispatch(set_language(language));
        dispatch(set_language_keys(languages[language]))
    }

    useEffect(() => {
        if (seconds !== 0) {
            setTypeSpeed(Math.floor(correct / (seconds / 60)));
        } else {
            setTypeSpeed(0);
        }
    }, [seconds])

    return (
        <>
            <Button 
                variant="contained"
                onClick={() => goToTasks()}
            ><ArrowBackIcon/></Button>
            {isStringFinished && 
                <ResultModalWindow
                    setIsStringFinished={setIsStringFinished}
                    typeSpeed={typeSpeed}
                />
            }
            <div className={`${Style["task-page"]} container`}>
                <WarningDisplay />
                <div className={`${Style["task-card"]}`}>
                    <div className={`${Style["task-card_leftpart"]}`}>
                        <div className={`${Style["task-title"]}`}>Задание <span className={`${Style["task-title_number"]}`}>#1</span></div>
                        <div className={`${Style["task-info"]}`}><p>Количество ошибок:</p><span className={`${Style["task-info_mistakes"]}`}>{uncorrect}</span></div>
                        <div className={`${Style["task-info"]}`}><p>Текущая скорость:</p><span className={`${Style["task-info_speed"]}`}>{typeSpeed}</span></div>
                        <div className={`${Style["task-info"]}`}><p>Время:</p><span className={`${Style["task-info_time"]}`}>{minutes}:{`${seconds < 10 ? '0' : ''}`}{seconds}</span></div>
                    </div>
                    <div className={`${Style["task-card_rightpart"]}`}>
                        <div className={`${Style["task-type"]}`}>
                            <div className={`${Style["task-type_title"]}`}>Тип задания</div>
                            <span className={`${Style["task-type_title_item"]}`}>Базовый урок</span>
                        </div>
                        <div className={`${Style["task-type"]}`}>
                            <div className={`${Style["task-type_title"]}`}>Сложность</div>
                            <i className={`fa fa-solid fa-circle ${Style["fa-circle"]}`}></i>
                            <i className={`fa fa-solid fa-circle ${Style["fa-circle"]}`}></i>
                            <i className={`fa fa-solid fa-circle ${Style["fa-circle"]}`}></i>
                            <i className={`fa fa-solid fa-circle ${Style["fa-circle"]}`}></i>
                            <i className={`fa fa-solid fa-circle ${Style["fa-circle"]}`}></i>
                        </div>
                        <Selector
                            fields={['English', 'Русский']}
                            onClickFunction={setLanguage}
                            heading={language}
                        />
                    </div>
                </div>
                <KeyboardWrapper
                    isStringFinished={isStringFinished}
                    setIsStringFinished={setIsStringFinished}
                    taskSettings={taskSettings}
                />
            </div>
        </>
    )
}

export default Task