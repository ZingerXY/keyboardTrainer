import React, { useState} from 'react';
import './Tasks.scss'
import Task from "../Task/Task"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Card from "../Card/Card";

const Tasks = () => {
  const tasksInputObj = [
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
  let tasksOutputObj = [];

  const [ taskActive, setTaskActive] = useState(false);
  const [ sort, setSort ] = useState({value: 'desc', text: 'Сначала легкие'});
  const [ base, setBase] = useState(true);
  const [ words, setWords] = useState(true);
  const [ punctuation, setPunctuation] = useState(true);
  const [ numAndSymbols, setNumAndSymbols] = useState(true);

  const handleStates = () => {
    tasksOutputObj = [];
    if (base) {
      tasksOutputObj = tasksOutputObj.concat(tasksInputObj.filter((el)=> (el.type === "base")));
    }
    if (words) {
      tasksOutputObj = tasksOutputObj.concat(tasksInputObj.filter((el)=> (el.type === "words")));
    }
    if (punctuation) {
      tasksOutputObj = tasksOutputObj.concat(tasksInputObj.filter((el)=> (el.type === "punctuation")));
    }
    if (numAndSymbols) {
      tasksOutputObj = tasksOutputObj.concat(tasksInputObj.filter((el)=> (el.type === "numbers")));
    }
    tasksOutputObj.sort((a, b) => {
      return sort.value === "desc" ? a.level - b.level : b.level - a.level;
    });
  };

  const selectOpen = () => {
    const selectSingle = document.querySelector('.__select');
    if ('active' === selectSingle.getAttribute('data-state')) {
      selectSingle.setAttribute('data-state', '');
    } else {
      selectSingle.setAttribute('data-state', 'active');
    }
  };
  const selectChange = (event) => {
    const selectSingle = document.querySelector('.__select');
    setSort(()=>({value: event.target.getAttribute('data-value'), text: event.target.textContent}));
    selectSingle.setAttribute('data-state', '');
  };
  handleStates();
  if (taskActive) {
    return (
      <Task />
    );
  } else {
    return (
      <div className="tasks-page">
        <div className="container tasks-container">
          <form action="#" id="filters-form" onChange={handleStates}>
            <div className="form-checkboxs">
              <h4 className="filters-title">Тип задания</h4>
              <div id="brands">
                <div className="filters-checkbox">
                  <input type="checkbox" className="filters-checkbox_custom" id="base" checked={base} onChange={() => setBase(!base)}/>
                  <label htmlFor="base">Базовые уроки</label>
                </div>
                <div className="filters-checkbox">
                  <input type="checkbox" className="filters-checkbox_custom" id="words" checked={words} onChange={() => setWords(!words)}/>
                  <label htmlFor="words"> Слова</label>
                </div>
                <div className="filters-checkbox">
                  <input type="checkbox" className="filters-checkbox_custom" id="punctuation" checked={punctuation} onChange={() => setPunctuation(!punctuation)}/>
                  <label htmlFor="punctuation"> Знаки препинания</label>
                </div>
                <div className="filters-checkbox">
                  <input type="checkbox" className="filters-checkbox_custom" id="numbers" checked={numAndSymbols} onChange={() => setNumAndSymbols(!numAndSymbols)}/>
                  <label htmlFor="numbers"> Цифры и символы</label>
                </div>
              </div>
            </div>
            <div className="form-selector">
              <h4 className="filters-title">Сортировка</h4>
              <div className="__select" data-state="" onClick={selectOpen}>
                <div className="__select__title">{sort.text}</div>
                <div className="__select__content" >
                  <input id="singleSelect0" className="__select__input" type="radio" name="singleSelect" defaultChecked={true}/>
                  <label htmlFor="singleSelect0" tabIndex="0" className="__select__label" data-value="desc" onClick={selectChange}>Сначала легкие</label>
                  <input id="singleSelect1" className="__select__input" type="radio" name="singleSelect"/>
                  <label htmlFor="singleSelect1" tabIndex="0" className="__select__label" data-value="asc" onClick={selectChange}>Сначала сложные</label>
                </div>
              </div>
            </div>
          </form>
          <div className="cards-box">
            {tasksOutputObj.map((el) => (<Card {...el} key={el.id} myKey={el.id} state={setTaskActive}/>))}
          </div>
        </div>
      </div>
    )
  }
}

export default Tasks
