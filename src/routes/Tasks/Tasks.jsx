import React, { useState, useEffect } from 'react';
import Style from "./Tasks.module.scss";
import Task from "../../components/Task/Task"
import '@fortawesome/fontawesome-free/css/all.min.css';
import Card from "../../components/Card/Card";
import BasicPagination from "../../components/Pagination/Pagination";

const Tasks = () => {
  const [initialTasks, setInitialTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [taskOption, setTaskOption] = useState("");
  const [taskActive, setTaskActive] = useState(false);
  const [sort, setSort] = useState({ value: "desc", text: "Сначала легкие" });
  const [base, setBase] = useState(true);
  const [words, setWords] = useState(true);
  const [letters, setLetters] = useState(true);
  const [punctuation, setPunctuation] = useState(true);
  const [numAndSymbols, setNumAndSymbols] = useState(true);
  const [selectState, setSelectState] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [paginationInfo, setPaginationInfo] = useState({
    limit: 10,
    page: 1,
    totalItems: 0,
    sort: "asc",
  });

  const loadPost = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://kangaroo.zingery.ru/api/tasks?page=${page}`
      );
      const json = await response.json();

      const filterTypes = getCollectedFilters();

      setInitialTasks(json.data);

      setFilteredTasks(
        json.data
          .filter((el) => filterTypes.includes(el.task_type))
          .sort(sortTasks)
      );

      setPaginationInfo({
        ...paginationInfo,
        page: json.meta.current_page,
        totalItems: json.meta.total,
        limit: json.meta.per_page,
      });
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const selectOpen = () => {
    setSelectState(!selectState);
  };

  const selectChange = (newValue, newText, e) => {
    setSort({ value: newValue, text: newText });
    if (e) e.stopPropagation();
  };

  const sortTasks = (a, b) =>
    sort.value === "desc"
      ? a.difficulty - b.difficulty
      : b.difficulty - a.difficulty;

  const getCollectedFilters = () => {
    const filterTypes = [];
    if (letters) filterTypes.push("Буквы");
    if (words) filterTypes.push("Слова");
    if (base) filterTypes.push("База");
    if (punctuation) filterTypes.push("Пунктуация");
    if (numAndSymbols) filterTypes.push("Цифры");

    return filterTypes;
  };

  useEffect(() => {
    loadPost(paginationInfo.page);
  }, []);

  useEffect(() => {
    if (!initialTasks.length) return;

    const filterTypes = getCollectedFilters();

    const newTasks = [
      ...initialTasks
        .filter((el) => filterTypes.includes(el.task_type))
        .sort(sortTasks),
    ];

    setFilteredTasks(newTasks);
  }, [base, words, letters, punctuation, numAndSymbols]);

  useEffect(() => {
    if (!initialTasks.length) return;

    setInitialTasks((prev) => [...prev.sort(sortTasks)]);
  }, [sort]);

  const handlePageChange = (event, page) => {
    setPaginationInfo({
      ...paginationInfo,
      page,
    });
    loadPost(page);
  };

  if (isLoading) return "Загрузка....";

  if (taskActive) {
    const task = initialTasks.filter((el) => el.task_type === taskOption)[0];
    const taskSettings = {
      type: taskOption,
      amount: 7,
    };
    return <Task taskSettings={taskSettings} />;
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
              <div
                className={`${Style["__select"]} ${selectState ? Style["__select_active"] : ""
                  }`}
                onClick={selectOpen}
              >
                <div className={`${Style["__select__title"]}`}>{sort.text}</div>
                <div className={`${Style["__select__content"]}`}>
                  <input
                    id="singleSelect0"
                    className={`${Style["__select__input"]}`}
                    type="radio"
                    name="singleSelect"
                    defaultChecked={true}
                  />
                  <label
                    htmlFor="singleSelect0"
                    tabIndex="0"
                    className={`${Style["__select__label"]}`}
                    onClick={(e) => selectChange("desc", "Сначала легкие", e)}
                  >
                    Сначала легкие
                  </label>
                  <input
                    id="singleSelect1"
                    className={`${Style["__select__input"]}`}
                    type="radio"
                    name="singleSelect"
                  />
                  <label
                    htmlFor="singleSelect1"
                    tabIndex="0"
                    className={`${Style["__select__label"]}`}
                    onClick={(e) => selectChange("asc", "Сначала сложные", e)}
                  >
                    Сначала сложные
                  </label>
                </div>
              </div>
            </div>
          </form>
          <div className={`${Style["cards-box"]}`}>
            {filteredTasks.map((el) => (
              <Card
                {...el}
                key={el.id}
                myKey={el.id}
                state={setTaskActive}
                setTaskOption={setTaskOption}
              />
            ))}
          </div>
        </div>
        <div className={`${Style["Pagination"]} container`}>
          <BasicPagination
            onPageChange={handlePageChange}
            {...paginationInfo}
          />
        </div>
      </div>
    );
  }
};

export default Tasks;