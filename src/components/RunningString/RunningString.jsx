import React from "react"
import './RunningString.scss'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from "react-redux"
import { update_time } from "../../store/time/reducer";
import { add_correct, add_uncorrect } from "../../store/data/reducer";

const RunningString = ({ setCurrentLetter, setPrevLetter, startWord, setStartWord }) => {
  const dispatch = useDispatch();
  const [endWord, setEndWord] = useState('') // Набранное слово
  const [correct, setCorrect] = useState(0)
  const [unCorrect, setUnCorrect] = useState(0) //Количество неправильных вводов
  const stringId = useRef(null) // Генерирует Ref для строки (Понадобиться для добавления стилей при неправильном вводе)
  const [timer, setTimer] = useState(0);
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)

  const CurrectInput = () => { //Логика при правильном вводе
    setCorrect(cur => cur + 1)
    if (startWord.length === 1) { //Проверяет, закончилось ли слово
      clearInterval(timer);
      setTimer(0)
    }
    setPrevLetter(startWord.substring(0, 1))
    startWord.substring(1)
    setStartWord(startWord => startWord.substring(1)) //Обновляет значение startWord
    setEndWord(word => word + startWord[0]) //Обновляет значение endWord

    if (endWord.length > 30) {
      setEndWord(word => word.slice(1)) //Убирает первый символ endWord
    }


  };

  const createTimer = () => {
    setTimer(setInterval(() => {
      if (seconds < 60) {
        setSeconds(s => s + 1)
      } else {

        setSeconds(s => s + 1)
      }
    }, 1000))
  }
  useEffect(() => { //Отслеживает нажатие на кнопку
    setCurrentLetter(startWord.substring(0, 1))
    dispatch(update_time({ seconds, minutes }))
    dispatch(add_uncorrect(unCorrect))
    dispatch(add_correct(correct))


    if (seconds === 60) {
      setMinutes(m => m + 1)
      setSeconds(0)
      clearInterval(timer)
      createTimer()
    }
    const keyDownHandler = event => {
      if (timer === 0) {
        createTimer()
      }
      if (event.key === startWord[0]) { //Проверяет, верно ли пользователь нажал на кнопку
        event.preventDefault();
        CurrectInput(); // Вызывает метод с логикой
      } else {
        event.preventDefault()
        stringId.current.classList.add('shake') // Трясет строку в случае, если введено неправильное значение
        setUnCorrect(unCorrect => unCorrect + 1);

        setTimeout(() => {
          stringId.current.classList.remove('shake') //Убирает класс анимации
        }, 800)
      }
    };

    document.addEventListener('keydown', keyDownHandler); // Добавляет слушатель события при нажатии

    return () => {
      document.removeEventListener('keydown', keyDownHandler); // Убирает слушатель события при нажатии
    };
  }, [startWord, unCorrect, seconds]);

  return (
    <div className="container">

      <div className="running-string" ref={stringId}>
        <div className="input-text end-string">{endWord}</div>
        <div className="input-text start-string">{startWord}</div>
      </div>
    </div>

  )
}

export default RunningString;