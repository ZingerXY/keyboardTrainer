import React from "react"
import './RunningString.scss'
import {useState, useEffect} from 'react'

const RunningString = () => {

    const [startWord, setStartWord] = useState('йцуке фывап ячсм');
    const [endWord, setEndWord] = useState('')

    const CurrectInput = () => {

        console.log(startWord[1])
        if (startWord.length < 1) {
        } else {
            startWord.substring(1)
            setStartWord(startWord => startWord.substring(1))
          setEndWord(word => word +startWord[0])
    
        }
        console.log('pressed Enter ✅');
      };
      useEffect(() => {
        const keyDownHandler = event => {
          console.log('User pressed: ', event.key);
    
          if (event.key === startWord[0]) {
            event.preventDefault();
    
            // 👇️ your logic here
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
        <div className="running-string">
            <div className="end-string">{endWord}</div>
            <div className="start-string">{startWord}</div>
        </div>
    )
}

export default RunningString;