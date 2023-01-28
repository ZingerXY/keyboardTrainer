import React, {useState, useEffect} from 'react';
import Style from "./Tasks.module.scss";
import Task from "../../components/Task/Task"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Card from "../../components/Card/Card";
import BasicPagination from "../../components/Pagination/Pagination";
import Selector from '../../components/Selector/Selector';
import { useSelector, useDispatch } from "react-redux";
import { set_language, set_language_keys } from "../../store/data/dataSlice";

const initialTasks = JSON.parse(JSON.stringify([
   // {
    //   "id":1,
    //   "level": 2,
    //   "typeName": "База",
    //   "type": "base",
    //   "name": "ва ол",
    //   "text": "ваол олва овал олол ваол олов овло",
    // "howManyToGenerate": 10
    // },
    // {
    //   "id":2,
    //   "level": 3,
    //   "typeName": "База",
    //   "type": "base",
    //   "name": "ва ол",
    //   "text": "ваол олва овал олол ваол олов овло",
    // "howManyToGenerate": 10
    // },
    {
      "id":3,
      "level": 5,
      "typeName": "слова",
      "type": "words",
      "name": "ва ол",
      "text": "ваол олва овал олол ваол олов овло",
      "howManyToGenerate": 5
    },
    {
      "id":4,
      "level": 4,
      "typeName": "Знаки",
      "type": "punctuation",
      "name": "./ ,?",
      "text": "ваол олва овал олол ваол олов овло",
      "howManyToGenerate": 7
    },
    {
      "id":5,
      "level": 3,
      "typeName": "Цифры",
      "type": "numbers",
      "name": "12 34",
      "text": "ваол олва овал олол ваол олов овло",
      "howManyToGenerate": 10
    },
]));

const languages = {
  'English': {
      topLeftCharacter: '§',
      keys: `qwertyuiop[]asdfghjkl;'zxcvbnm,./`
  },
  'Русский': {
      topLeftCharacter: 'ё', 
      keys: `йцукенгшщзхъфывапролджэёячсмитьбю/`
  }
}

const Tasks = () => {
  const [tasksOutputObj, setTasksOutputObj] = useState([]);
  const { language } = useSelector((state) => state.DataReducer);
  const dispatch = useDispatch();

  const [taskOption, setTaskOption] = useState('');
  const [taskActive, setTaskActive] = useState(false);
  const [sort, setSort] = useState('Сначала легкие');
  const [base, setBase] = useState(true);
  const [words, setWords] = useState(true);
  const [punctuation, setPunctuation] = useState(true);
  const [numAndSymbols, setNumAndSymbols] = useState(true);
  const [openedSelector, setOpenedSelector] = useState('');

  const sortTasks = (a, b) => sort === "Сначала легкие" ? a.level - b.level : b.level - a.level

  const setLanguage = (language) => {
    dispatch(set_language(language));
    dispatch(set_language_keys(languages[language]))
  }

  useEffect(() => {
    const filterTypes = []
    if (base) filterTypes.push("base")
    if (words) filterTypes.push("words")
    if (punctuation) filterTypes.push("punctuation")
    if (numAndSymbols) filterTypes.push("numbers")

    setTasksOutputObj([
        ...initialTasks
        .filter(el => filterTypes.includes(el.type))
        .sort(sortTasks)
      ]
    )
  }, [base, words, punctuation, numAndSymbols])

  useEffect(() => {
    setTasksOutputObj(prev => [...prev.sort(sortTasks)])
  }, [sort])

  if (taskActive) {
    const task = initialTasks.filter(el => el.type === taskOption)[0];
    const taskSettings = {
      type: taskOption,
      amount: task.howManyToGenerate
    }

    return (
      <Task
        taskSettings={taskSettings}
        goToTasks={() => setTaskActive(false)}
      />
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
                  <input type="checkbox" className={`${Style["filters-checkbox_custom"]}`} id="base" checked={base}
                         onChange={() => setBase(!base)}/>
                  <label htmlFor="base">Базовые уроки</label>
                </div>
                <div className={`${Style["filters-checkbox"]}`}>
                  <input type="checkbox" className={`${Style["filters-checkbox_custom"]}`} id="words" checked={words}
                         onChange={() => setWords(!words)}/>
                  <label htmlFor="words"> Слова</label>
                </div>
                <div className={`${Style["filters-checkbox"]}`}>
                  <input type="checkbox" className={`${Style["filters-checkbox_custom"]}`} id="punctuation"
                         checked={punctuation} onChange={() => setPunctuation(!punctuation)}/>
                  <label htmlFor="punctuation"> Знаки препинания</label>
                </div>
                <div className={`${Style["filters-checkbox"]}`}>
                  <input type="checkbox" className={`${Style["filters-checkbox_custom"]}`} id="numbers"
                         checked={numAndSymbols} onChange={() => setNumAndSymbols(!numAndSymbols)}/>
                  <label htmlFor="numbers"> Цифры и символы</label>
                </div>
              </div>
            </div>
            <div className={`${Style["form-selector"]}`}>
              <h4 className={`${Style["filters-title"]}`}>Сортировка</h4>
              <Selector
                fields={['Сначала легкие', 'Сначала сложные']}
                onClickFunction={setSort}
                heading={sort}
                setOpenedSelector={setOpenedSelector}
                name={'sorter'}
                openedSelector={openedSelector}
              />
              <Selector
                fields={['English', 'Русский']}
                onClickFunction={setLanguage}
                heading={language}
                setOpenedSelector={setOpenedSelector}
                name={'language'}
                openedSelector={openedSelector}
              />
            </div>
          </form>
          <div className={`${Style["cards-box"]}`}>
            {tasksOutputObj.map((el) => 
              <Card 
                {...el}
                key={el.id}
                myKey={el.id}
                state={setTaskActive}
                setTaskOption={setTaskOption}
              />)}
          </div>
        </div>
        <div className={`${Style["Pagination"]} container`}>
          <BasicPagination />
        </div>
      </div>
    )
  }
}

export default Tasks