import React, { useEffect } from "react";
import { useState } from 'react';
import Level from "../Level/Level";
import Style from "./Card.module.scss";

const Card = (props) => {
  const [type, setType] = useState("");
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
    let task = props.taskOption;
    task.description = props.task_description;
    task.name = props.task;
    task.type = props.task_type;
    task.level = props.difficulty;
    
    props.setTaskOption(task);
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
        <Level level={props.difficulty}/>
      </div>
    </div>
  );
};

export default Card;
