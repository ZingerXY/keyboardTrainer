import React, { useState, useEffect } from 'react';
import Style from "./Tasks.module.scss";
import Task from "../../components/Task/Task"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Card from "../../components/Card/Card";
import { useRef } from 'react';

const initialTasks = [
  {"id":1,
    "level": 2,
    "typeName": "База",
    "type": "base",
    "name": "ва ол",
    "text": "ваол олва овал олол ваол олов овло"},
  {"id":2,
    "level": 3,
    "typeName": "База",
    "type": "base",
    "name": "ва ол",
    "text": "ваол олва овал олол ваол олов овло"},
  {"id":3,
    "level": 5,
    "typeName": "слова",
    "type": "words",
    "name": "ва ол",
    "text": "ваол олва овал олол ваол олов овло"},
  {"id":4,
    "level": 4,
    "typeName": "Знаки",
    "type": "punctuation",
    "name": "./ ,?",
    "text": "ваол олва овал олол ваол олов овло"},
  {"id":5,
    "level": 3,
    "typeName": "Цифры",
    "type": "numbers",
    "name": "12 34",
    "text": "ваол олва овал олол ваол олов овло"},
];

const Tasks = () => {
  const [tasksInputObj, setTasksInputObj] = useState(JSON.parse(JSON.stringify(initialTasks)))
  let [tasksOutputObj, setTasksOutputObj] = useState([]);

  const [ taskActive, setTaskActive] = useState(false);
  const [ sort, setSort ] = useState({value: 'desc', text: 'Сначала легкие'});
  const [ base, setBase] = useState(true);
  const [ words, setWords] = useState(true);
  const [ punctuation, setPunctuation] = useState(true);
  const [ numAndSymbols, setNumAndSymbols] = useState(true);
  const [ selectState, setSelectState ] = useState(true);
  // const handleStates = () => {
    
  // };
  const selectEL = useRef();
  const selectOpen = () => {
    setSelectState(!selectState);
  };
  const selectChange = (newValue, newText) => {
    setSort({value: newValue, text: newText});
  };

  const filterType = type => {
    setTasksOutputObj(prev => [...prev, ...tasksInputObj.filter(el => el.type === type)])
  }

  useEffect(() => {
    if (base) filterType("base")
    if (words) filterType("words")
    if (punctuation) filterType("punctuation")
    if (numAndSymbols) filterType("numbers")
  }, [base, words, punctuation, numAndSymbols])

  useEffect(() => {
    setTasksOutputObj(prev => [...prev.sort((a, b) => sort.value === "desc" ? a.level - b.level : b.level - a.level)])
  }, [tasksOutputObj])

  if (taskActive) {
    return (
      <Task />
    );
  } else {
    return (
      <div className={`${Style["tasks-page"]}`}>
        <div className={`container ${Style["tasks-container"]}`}>
          <form action="#" className={`${Style["filters-form"]}`}>
            <div className={`${Style["form-checkboxs"]}`}>
              <h4 className={`${Style["filters-title"]}`}>Тип задания</h4>
              <div>
                <div className={`${Style["filters-checkbox"]}`}>
                  <input type="checkbox" className={`${Style["filters-checkbox_custom"]}`} id="base" checked={base} onChange={() => setBase(!base)}/>
                  <label htmlFor="base">Базовые уроки</label>
                </div>
                <div className={`${Style["filters-checkbox"]}`}>
                  <input type="checkbox" className={`${Style["filters-checkbox_custom"]}`} id="words" checked={words} onChange={() => setWords(!words)}/>
                  <label htmlFor="words"> Слова</label>
                </div>
                <div className={`${Style["filters-checkbox"]}`}>
                  <input type="checkbox" className={`${Style["filters-checkbox_custom"]}`} id="punctuation" checked={punctuation} onChange={() => setPunctuation(!punctuation)}/>
                  <label htmlFor="punctuation"> Знаки препинания</label>
                </div>
                <div className={`${Style["filters-checkbox"]}`}>
                  <input type="checkbox" className={`${Style["filters-checkbox_custom"]}`} id="numbers" checked={numAndSymbols} onChange={() => setNumAndSymbols(!numAndSymbols)}/>
                  <label htmlFor="numbers"> Цифры и символы</label>
                </div>
              </div>
            </div>
            <div className={`${Style["form-selector"]}`}>
              <h4 className={`${Style["filters-title"]}`}>Сортировка</h4>
              <div className={`${Style["__select"]} ${selectState ? Style["__select_active"]  : ""}`} ref={selectEL} onClick={selectOpen}>
                <div className={`${Style["__select__title"]}`}>{sort.text}</div>
                <div className={`${Style["__select__content"]}`}>
                  <input id="singleSelect0" className={`${Style["__select__input"]}`} type="radio" name="singleSelect" defaultChecked={true}/>
                  <label htmlFor="singleSelect0" tabIndex="0" className={`${Style["__select__label"]}`} onClick={() => selectChange("desc", "Сначала легкие")}>Сначала легкие</label>
                  <input id="singleSelect1" className={`${Style["__select__input"]}`} type="radio" name="singleSelect"/>
                  <label htmlFor="singleSelect1" tabIndex="0" className={`${Style["__select__label"]}`} onClick={() => selectChange("asc", "Сначала сложные")}>Сначала сложные</label>
                </div>
              </div>
            </div>
          </form>
          <div className={`${Style["cards-box"]}`}>
            {tasksOutputObj.map((el) => (<Card {...el} key={el.id} myKey={el.id} state={setTaskActive}/>))}
          </div>
        </div>
      </div>
    )
  }
}

export default Tasks
