import React  from "react";
import './styles/StatisticsData.scss'

const StatisticsData = () => {
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
        </div>
    )
}

export default StatisticsData

