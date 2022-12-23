import React from "react"
import './Task.scss'
import '@fortawesome/fontawesome-free/css/all.min.css';
import RunningString from "../RunningString/RunningString";
import Keyboard from "../Keyboard/Keyboard";

const Task = () => {
    return (
        <div className="task-page">
            <div className="task-card">
                <div className="task-card_leftpart">
                    <div className="task-title">Задание <span className="task-title_number">#1</span></div>
                    <div className="task-info">Количество ошибок:<span className="task-info_mistakes">0</span></div>
                    <div className="task-info">Текущая скорость:<span className="task-info_speed">0 зн/мин</span></div>
                    <div className="task-info">Время:<span className="task-info_time">00:00</span></div>
                </div>
                <div className="task-card_rightpart">
                    <div className="task-type">
                        <div className="task-type_title">Тип задания</div>
                        <span className="task-type_title_item">Базовый урок</span>
                    </div>
                    <div className="task-type">
                        <div className="task-type_title">Сложность</div>
                        <i class="fa fa-solid fa-circle"></i>
                        <i class="fa fa-solid fa-circle"></i>
                        <i class="fa fa-solid fa-circle"></i>
                        <i class="fa fa-solid fa-circle"></i>
                        <i class="fa fa-solid fa-circle"></i>
                    </div>
                </div>
            </div>
            <RunningString />
            <Keyboard />
        </div>
    )
}

export default Task