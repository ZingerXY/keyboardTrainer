import React, { useRef, useState } from "react";
import './styles/StatisticsData.scss'

const StatisticsData = () => {
   
    const [activeBtn, setActiveBtn] = useState(0);

    const setDraw = (e) => {
        if (activeBtn) {
            activeBtn.classList.remove('opened')
            setActiveBtn(e.target)
            e.target.classList.add('opened')
        } else {
            e.target.classList.add('opened')
            setActiveBtn(e.target)
        }
        
    }

    return (
        <div className="statistics-data">
            <h1 className="statistics-header">Общие данные</h1>
            <div className="statistics-part">
                <div className="statistics-mini">
                    <h3 className="statistics-mini-title">Среднее количество ошибок</h3>
                    <h4 className="statistics-mini-value">10 знаков</h4>
                </div>
                <div className="statistics-mini">
                    <h3 className="statistics-mini-title">Средняя скорость</h3>
                    <h4 className="statistics-mini-value">400 зн/мин</h4>
                </div>
                <div className="statistics-mini">
                    <h3 className="statistics-mini-title">Аккуратность</h3>
                    <h4 className="statistics-mini-value">99.99%</h4>
                </div>
            </div>
            <div className="statistics-draw">
            <h1 className="statistics-header">Графики</h1>
            <div className="statistics-draw-part">
                <div className="statistics-draw-selection">
                    <button className="statistics-draw-btn" onClick={setDraw}>Скорость</button>
                    <button className="statistics-draw-btn" onClick={setDraw}>Аккуратность</button>
                    <button className="statistics-draw-btn" onClick={setDraw}>Ошибки</button>
                </div>
                <div className="statistics-draw-graph">
                    <img src="./img/Frame 32.png" alt="" />
                </div>
            </div>
            </div>
        </div>
    )
}

export default StatisticsData

