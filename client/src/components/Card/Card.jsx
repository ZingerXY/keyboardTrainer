import React from "react";
import Style from "./Card.module.scss";

const Card = (props) => {
  let levelArr = [0, 0, 0, 0, 0];
  for (let i = 0; i < props.level; i++) {
    levelArr[i] = 1;
  }
  const handlerClick = () => {
    props.state(true);
  };
  return (
    <div className={`${Style["card"]}`} key={props.myKey} onClick={handlerClick}>
      <div className={`${Style["card-head"]} ${Style["card-head_" + props.type]}`}>
        <div className={`${Style["card-name"]}`}>{props.name}</div>
        <div className={`${Style["card-type"]} ${Style["card-type_" + props.type]}`}>{props.typeName}</div>
      </div>
      <div className={`${Style["card-bottom"]}`}>
        <p className={`${Style["card-level"]}`}>Сложность</p>
        <ul className={`${Style["card-level-box"]}`}>
          {levelArr.map((el, id)=>(
            el === 1
            ? <li key={id} className={`${Style["level-point"]} ${Style["level-active"]}`}></li>
            : <li key={id} className={`${Style["level-point"]}`}></li>
          ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Card;
