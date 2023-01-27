import React, { useEffect } from "react";
import { useState } from 'react';
import Style from "./Card.module.scss";

const Card = (props) => {
  let levelArr = [0, 0, 0, 0, 0];
  const [type, setType] = useState("");
  for (let i = 0; i < props.difficulty; i++) {
    levelArr[i] = 1;
  }
  useEffect(() => {
    switch (props.task_type) {
      case "База":
        setType("base");
        break;
      case "Буквы":
        setType("letters");
        break;
      case "Слова":
        setType("words");
        break;
      case "Знаки":
        setType("punctuation");
        break;
      case "Цифры":
        setType("numbers");
        break;
      default:
        break;
    }
  }, []);

  const handlerClick = () => {
    props.setTaskOption(props.task_description);
    props.state(true);
  };

  return (
    <div
      className={`${Style["card"]}`}
      key={props.myKey}
      onClick={handlerClick}
    >
      <div className={`${Style["card-head"]} ${Style["card-head_" + type]}`}>
        <div className={`${Style["card-name"]}`}>{props.task}</div>
        <div className={`${Style["card-type"]} ${Style["card-type_" + type]}`}>
          {props.task_type}
        </div>
      </div>
      <div className={`${Style["card-bottom"]}`}>
        <p className={`${Style["card-level"]}`}>Сложность</p>
        <ul className={`${Style["card-level-box"]}`}>
          {levelArr.map((el, id) =>
            el === 1 ? (
              <li
                key={id}
                className={`${Style["level-point"]} ${Style["level-active"]}`}
              ></li>
            ) : (
              <li key={id} className={`${Style["level-point"]}`}></li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Card;
