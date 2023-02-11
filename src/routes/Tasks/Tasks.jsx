import React, { useState, useEffect } from "react";
import Style from "./Tasks.module.scss";
import Task from "../../components/Task/Task";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Card from "../../components/Card/Card";
import BasicPagination from "../../components/Pagination/Pagination";
import Selector from "../../components/Selector/Selector";
import { useSelector, useDispatch } from "react-redux";
import { set_language, set_language_keys } from "../../store/data/dataSlice";

const languages = {
  English: {
    topLeftCharacter: "§",
    keys: `qwertyuiop[]asdfghjkl;'zxcvbnm,./`,
  },
  Русский: {
    topLeftCharacter: "ё",
    keys: `йцукенгшщзхъфывапролджэёячсмитьбю/`,
  },
};

const Tasks = () => {
  const [initialTasks, setInitialTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [tasksWithPagination, setTasksWithPagination] = useState([]);
  const [taskOption, setTaskOption] = useState({description: "", name: "Задание", type: "База", level: 0});
  const [taskActive, setTaskActive] = useState(false);
  const [sort, setSort] = useState("Сначала легкие");
  const [base, setBase] = useState(true);
  const [words, setWords] = useState(true);
  const [letters, setLetters] = useState(true);
  const [punctuation, setPunctuation] = useState(true);
  const [numAndSymbols, setNumAndSymbols] = useState(true);
  const [openedSelector, setOpenedSelector] = useState("");
  const { language } = useSelector((state) => state.DataReducer);
  const dispatch = useDispatch();

  const setLanguage = (language) => {
    dispatch(set_language(language));
    dispatch(set_language_keys(languages[language]));
  };
  const [isLoading, setLoading] = useState(false);
  const [paginationInfo, setPaginationInfo] = useState({
    limit: 6,
    page: 1,
    totalItems: 0,
  });

  const loadPost = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://kangaroo.zingery.ru/api/tasks?filter[lang]=${language === "English" ? "eng" : "ru"
        }`
      );
      const json = await response.json();

      const filterTypes = getCollectedFilters();

      setInitialTasks(json.data);

      const filteredTasks = json.data
        .filter((el) => filterTypes.includes(el.task_type))
        .sort(sortTasks);
      setFilteredTasks(filteredTasks);

      setPaginationInfo({
        ...paginationInfo,
        totalItems: json.data.length,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const selectChange = (newValue, newText, e) => {
    setSort({ value: newValue, text: newText });
    if (e) e.stopPropagation();
  };

  const sortTasks = (a, b) =>
    sort === "Сначала легкие"
      ? a.difficulty - b.difficulty
      : b.difficulty - a.difficulty;

  const getCollectedFilters = () => {
    const filterTypes = [];
    if (letters) filterTypes.push("Буквы");
    if (words) filterTypes.push("Слова");
    if (base) filterTypes.push("База");
    if (punctuation) filterTypes.push("Знаки");
    if (numAndSymbols) filterTypes.push("Цифры");

    return filterTypes;
  };

  useEffect(() => {
    loadPost();
  }, [language]);

  useEffect(() => {
    if (!initialTasks.length) return;

    const filterTypes = getCollectedFilters();

    const newTasks = [
      ...initialTasks
        .filter((el) => filterTypes.includes(el.task_type))
        .sort(sortTasks),
    ];

    setFilteredTasks(newTasks);
    setPaginationInfo({
      ...paginationInfo,
      totalItems: newTasks.length,
      page:
        newTasks?.length + paginationInfo.limit <
          paginationInfo.limit * paginationInfo.page
          ? 1
          : paginationInfo.page,
    });
  }, [base, words, letters, punctuation, numAndSymbols, sort]);

  useEffect(() => {
    if (!filteredTasks.length) return setTasksWithPagination([]);

    setTasksWithPagination(
      filteredTasks.slice(
        (paginationInfo.page - 1) * paginationInfo.limit,
        paginationInfo.page * paginationInfo.limit
      )
    );
  }, [paginationInfo]);

  useEffect(() => {
    if (!initialTasks.length) return;

    setInitialTasks((prev) => [...prev.sort(sortTasks)]);
  }, [sort]);

  useEffect(() => { }, [openedSelector]);

  const handlePageChange = (event, page) => {
    setPaginationInfo({
      ...paginationInfo,
      page,
    });
  };

  if (isLoading) return "Загрузка....";

  if (taskActive) {
    return (
      <Task
        goToTasks={() => setTaskActive(false)}
        taskSettings={{
          name: taskOption.name,
          type: taskOption.type,
          level: taskOption.level,
          description: taskOption.description,
          amount: 7,
        }}
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
                  <input
                    type="checkbox"
                    className={`${Style["filters-checkbox_custom"]}`}
                    id="base"
                    checked={base}
                    onChange={() => setBase(!base)}
                  />
                  <label htmlFor="base">Базовые уроки</label>
                </div>
                <div className={`${Style["filters-checkbox"]}`}>
                  <input
                    type="checkbox"
                    className={`${Style["filters-checkbox_custom"]}`}
                    id="words"
                    checked={words}
                    onChange={() => setWords(!words)}
                  />
                  <label htmlFor="words">Слова</label>
                </div>
                <div className={`${Style["filters-checkbox"]}`}>
                  <input
                    type="checkbox"
                    className={`${Style["filters-checkbox_custom"]}`}
                    id="letters"
                    checked={letters}
                    onChange={() => setLetters(!letters)}
                  />
                  <label htmlFor="letters">Буквы</label>
                </div>
                <div className={`${Style["filters-checkbox"]}`}>
                  <input
                    type="checkbox"
                    className={`${Style["filters-checkbox_custom"]}`}
                    id="punctuation"
                    checked={punctuation}
                    onChange={() => setPunctuation(!punctuation)}
                  />
                  <label htmlFor="punctuation"> Знаки препинания</label>
                </div>
                <div className={`${Style["filters-checkbox"]}`}>
                  <input
                    type="checkbox"
                    className={`${Style["filters-checkbox_custom"]}`}
                    id="numbers"
                    checked={numAndSymbols}
                    onChange={() => setNumAndSymbols(!numAndSymbols)}
                  />
                  <label htmlFor="numbers"> Цифры и символы</label>
                </div>
              </div>
            </div>
            <div className={`${Style["form-selector"]}`}>
              <h4 className={`${Style["filters-title"]}`}>Сортировка</h4>
              <Selector
                fields={["Сначала легкие", "Сначала сложные"]}
                onClickFunction={setSort}
                heading={sort}
                setOpenedSelector={setOpenedSelector}
                name={"sorter"}
                openedSelector={openedSelector}
              />
              <Selector
                fields={["English", "Русский"]}
                onClickFunction={setLanguage}
                heading={language}
                setOpenedSelector={setOpenedSelector}
                name={"language"}
                openedSelector={openedSelector}
              />
            </div>
          </form>
          {tasksWithPagination?.length ? (
            <div className={`${Style["cards-box"]}`}>
              {tasksWithPagination.map((el) => (
                <Card
                  {...el}
                  key={el.id}
                  myKey={el.id}
                  state={setTaskActive}
                  taskOption={taskOption}
                  setTaskOption={setTaskOption}
                />
              ))}
              <div className={`${Style["Pagination"]} container`}>
                <BasicPagination
                  onPageChange={handlePageChange}
                  {...paginationInfo}
                />
              </div>
            </div>
          ) : (
            <div className={`${Style["cards-box-empty"]}`}><p>Нет заданий</p></div>
          )}
        </div>

      </div>
    );
  }
};

export default Tasks;
