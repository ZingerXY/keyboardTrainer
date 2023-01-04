import React, { useState } from "react"
import './Task.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import RunningString from "../RunningString/RunningString";
import Keyboard from "../Keyboard/Keyboard";
import {KeyboardWrapper} from "../KeyboardWrapper";

const Task = () => {
    const [numberOfMistakes, setNumberOfMistakes] = useState(0);
    

    return (
        <div className="task-page container">
            <div className="warning-dispay">
                <div className="warning-dispay_title">Внимание</div>
                <div className="warning-dispay_text">Выполнение задания недоступно с мобильной версии браузера.</div>
            </div>
            <div className="task-card">
                <div className="task-card_leftpart">
                    <div className="task-title">Задание <span className="task-title_number">#1</span></div>
                    <div className="task-info"><p>Количество ошибок:</p><span className="task-info_mistakes">{numberOfMistakes}</span></div>
                    <div className="task-info"><p>Текущая скорость:</p><span className="task-info_speed">0</span></div>
                    <div className="task-info"><p>Время:</p><span className="task-info_time">00:00</span></div>
                </div>
                <div className="task-card_rightpart">
                    <div className="task-type">
                        <div className="task-type_title">Тип задания</div>
                        <span className="task-type_title_item">Базовый урок</span>
                    </div>
                    <div className="task-type">
                        <div className="task-type_title">Сложность</div>
                        <i className="fa fa-solid fa-circle"></i>
                        <i className="fa fa-solid fa-circle"></i>
                        <i className="fa fa-solid fa-circle"></i>
                        <i className="fa fa-solid fa-circle"></i>
                        <i className="fa fa-solid fa-circle"></i>
                    </div>
                </div>
            </div>
            <KeyboardWrapper setNumberOfMistakes={setNumberOfMistakes}/>
        </div>
    )
}

export default Task