import React  from "react";
import DataStyle from './styles/StatisticsData.module.scss'

const StatisticsData = () => {
    return (
        <div className={DataStyle.statistics_data}>
            <h1 className={DataStyle.statistics_header}>Общие данные</h1>
            <div className={DataStyle.statistics_part}>
                <div className={DataStyle.statistics_mini_left}>
                    <h3 className={DataStyle.statistics_mini_title}>Среднее количество ошибок</h3>
                    <h3 className={DataStyle.statistics_mini_title}>Средняя скорость</h3>
                    <h3 className={DataStyle.statistics_mini_title}>Аккуратность</h3>
                </div>
                <div className={DataStyle.statistics_mini_right}>
                    <h4 className={DataStyle.statistics_mini_value}>10 знаков</h4>
                    <h4 className={DataStyle.statistics_mini_value}>400 зн/мин</h4>
                    <h4 className={DataStyle.statistics_mini_value}>99.99%</h4>
                </div>
            </div>
        </div>
    )
}

export default StatisticsData
