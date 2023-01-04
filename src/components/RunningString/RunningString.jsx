import React from "react"
import './RunningString.scss'
import { useState, useEffect, useRef } from 'react'
import { useDispatch } from "react-redux"

const RunningString = ({setCurrentLetter, setPrevLetter}) => {
  const dispatch = useDispatch();
  const [startWord, setStartWord] = useState('пример текста пример текста пример текста пример текста'); //Слово, которое надо набрать
  const [endWord, setEndWord] = useState('') // Набранное слово
  const [unCorrect, setUnCorrect] = useState(0) //Количество неправильных вводов
  const stringId = useRef(null) // Генерирует Ref для строки (Понадобиться для добавления стилей при неправильном вводе)

  const CurrectInput = () => { //Логика при правильном вводе
    if (startWord.length <1) { //Проверяет, закончилось ли слово
      //generateWord()
    } else {
      setPrevLetter(startWord.substring(0, 1))
      startWord.substring(1)
      setStartWord(startWord => startWord.substring(1)) //Обновляет значение startWord
      setEndWord(word => word + startWord[0]) //Обновляет значение endWord

      if (endWord.length > 30) {
        // console.log(endWord.length)
        setEndWord(word => word.slice(1)) //Убирает первый символ endWord
      }

    }
  };
  useEffect(() => { //Отслеживает нажатие на кнопку
    setCurrentLetter(startWord.substring(0, 1))
    const keyDownHandler = event => {
      // stringId.current.classList.add('shake')
      if (event.key === startWord[0]) { //Проверяет, верно ли пользователь нажал на кнопку
        event.preventDefault();
        CurrectInput(); // Вызывает метод с логикой
      } else {
        event.preventDefault()
        stringId.current.classList.add('shake') // Трясет строку в случае, если введено неправильное значение
        setUnCorrect(unCorrect => unCorrect + 1);
        console.log(unCorrect)
        console.log(1111)
        dispatch({
          type: 'ADD_UNCORRECT', count: unCorrect
        })
        setTimeout(() => {
          stringId.current.classList.remove('shake') //Убирает класс анимации
        }, 800)
      }
    };

    document.addEventListener('keydown', keyDownHandler); // Добавляет слушатель события при нажатии

    return () => {
      document.removeEventListener('keydown', keyDownHandler); // Убирает слушатель события при нажатии
    };
  }, [startWord, unCorrect]);

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