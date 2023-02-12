import React from "react";
import {useSelector} from "react-redux";
import {useState, useEffect} from "react";
import DataStyle from "./StatisticsData.module.scss";

const StatisticsData = ({id}) => {

  const {count, correct} = useSelector((state) => state.DataReducer);
  const {seconds} = useSelector((state) => state.TimeReducer);
  const [result, setResult] = useState(0);
  const [care, setCare] = useState(0);
  useEffect(() => {
    if (seconds !== 0) {
      setResult(Math.floor(correct / (seconds / 60)));
    }
  }, [seconds])
  useEffect(() => {
    if (correct !== 0) {
      setCare(Math.floor(correct / (count + correct) * 100));
    }
  }, [])

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
          <h4 className={DataStyle.statistics_mini_value}>{count} знаков</h4>
          <h4 className={DataStyle.statistics_mini_value}>{result} зн/мин</h4>
          <h4 className={DataStyle.statistics_mini_value}>{care}%</h4>
        </div>
      </div>
    </div>
  )
}

export default StatisticsData
