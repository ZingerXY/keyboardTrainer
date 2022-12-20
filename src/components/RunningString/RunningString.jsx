import React from "react"
import './RunningString.scss'
import { useState, useEffect, createRef } from 'react'

const RunningString = () => {
  const [startWord, setStartWord] = useState('пример текста пример текста пример текста пример текста'); //Слово, которое надо набрать
  const [endWord, setEndWord] = useState('') // Набранное слово
  const stringId = createRef() // Генерирует Ref для строки (Понадобиться для добавления стилей при неправильном вводе)

  /*
  Тестовый метод для генерации новых слов
  const generateWord = () => {
      let word = ''
      const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

      for( let i=0; i < 5; i++ )
      word += alphabet.charAt(Math.floor(Math.random() * alphabet.length));

      setEndWord('')
      setStartWord(word)
  }*/

  const CurrectInput = () => { //Логика при правильном вводе
    /*
    Проверял, почему пробел не отображается
    if ( startWord[1] == ' ') { 
        console.log(startWord.substring(1))
    }
    */
    if (startWord.length < 1) { //Проверяет, закончилось ли слово
      //generateWord()
    } else {
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
    const keyDownHandler = event => {
      // stringId.current.classList.add('shake')
      if (event.key === startWord[0]) { //Проверяет, верно ли пользователь нажал на кнопку
        event.preventDefault();
        CurrectInput(); // Вызывает метод с логикой
      } else {
        stringId.current.classList.add('shake') // Трясет строку в случае, если введено неправильное значение
        setTimeout(() => {
          stringId.current.classList.remove('shake') //Убирает класс анимации
        }, 800)
      }
    };

    document.addEventListener('keydown', keyDownHandler); // Добавляет слушатель события при нажатии

    return () => {
      document.removeEventListener('keydown', keyDownHandler); // Убирает слушатель события при нажатии
    };
  }, [startWord]);
  return (
    <div className="container">
      <p className="demo-task">ДЕМО-ЗАДАНИЕ</p>
      <div className="running-string" ref={stringId}>
        <div className="input-text end-string">{endWord}</div>
        <div className="input-text start-string">{startWord}</div>
      </div>
    </div>

  )
}

export default RunningString;