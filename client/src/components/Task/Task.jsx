import React, { useEffect, useState } from "react"
import Style from "./Task.module.scss";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { KeyboardWrapper } from "../KeyboardWrapper";
import { useSelector } from "react-redux";
import WarningDisplay from "../WarningDisplay/WarningDisplay"

const Task = () => {
    const { count, correct } = useSelector((state) => state.DataReducer);
    const { seconds, minutes } = useSelector((state) => state.TimeReducer);
    const [result, setResult] = useState(0);

    useEffect(() => {
        if (seconds !== 0) {
            setResult(Math.floor(correct / (seconds / 60)));
        } else {
            setResult(0);
        }
    }, [seconds])

    return (
        <div className={`${Style["task-page"]} container`}>
            <WarningDisplay />
            <div className={`${Style["task-card"]}`}>
                <div className={`${Style["task-card_leftpart"]}`}>
                    <div className={`${Style["task-title"]}`}>Задание <span className={`${Style["task-title_number"]}`}>#1</span></div>
                    <div className={`${Style["task-info"]}`}><p>Количество ошибок:</p><span className={`${Style["task-info_mistakes"]}`}>{count}</span></div>
                    <div className={`${Style["task-info"]}`}><p>Текущая скорость:</p><span className={`${Style["task-info_speed"]}`}>{result}</span></div>
                    <div className={`${Style["task-info"]}`}><p>Время:</p><span className={`${Style["task-info_time"]}`}>{minutes}:{seconds}</span></div>
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
                </div>
            </div>
            <KeyboardWrapper />
        </div>
    )
}

export default Task