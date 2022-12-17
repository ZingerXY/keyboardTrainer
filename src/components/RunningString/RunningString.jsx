import React from "react"
import './RunningString.scss'
import {useState, useEffect, createRef} from 'react'

const RunningString = () => {
    const [startWord, setStartWord] = useState('йцуке фывап ячсм');
    const [endWord, setEndWord] = useState(' ')
    const stringId = createRef()

    const generateWord = () => {
        let word = ''
        const alphabet = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

        for( let i=0; i < 5; i++ )
        word += alphabet.charAt(Math.floor(Math.random() * alphabet.length));

        setEndWord('')
        setStartWord(word)
    }

    const CurrectInput = () => {
        if ( startWord[1] == ' ') {
            console.log(startWord.substring(1))
        }
        console.log(startWord[1])
        if (startWord.length <= 1) {
            generateWord()
        } else {
            startWord.substring(1)
            setStartWord(startWord => startWord.substring(1))
            setEndWord(word => word +startWord[0])
    
        }
      };
      useEffect(() => {
        const keyDownHandler = event => {
          if (event.key === startWord[0]) {
            event.preventDefault();
            CurrectInput();
          } else {
            
          }
        };
    
        document.addEventListener('keydown', keyDownHandler);
    
        return () => {
          document.removeEventListener('keydown', keyDownHandler);
        };
      }, [startWord]);
    return (
        <div className="running-string" ref={stringId}>
            <div className="input-text end-string">{endWord}</div>
            <div className="input-text start-string">{startWord}</div>
        </div>
    )
}

export default RunningString;