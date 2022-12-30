import React from "react";
import "./Card.scss"
const Card = (props) => {
  let levelArr = [0, 0, 0, 0, 0];
  for (let i = 0; i < props.level; i++) {
    levelArr[i] = 1;
  }
  const handlerClick = () => {
    props.state(true);
  };
  return (
    <div className="card" key={props.myKey} onClick={handlerClick}>
      <div className={"card-head card-head_" + props.type}>
        <div className="card-name">{props.name}</div>
        <div className={"card-type card-type_" + props.type}>{props.typeName}</div>
      </div>
      <div className="card-bottom">
        <p className="card-level">Сложность</p>
        <ul className="card-level-box">
          {levelArr.map((el, id)=>(
            el === 1
            ? <li key={id} className="level-point level-active"></li>
            : <li key={id} className="level-point"></li>
          ))
          }
        </ul>
      </div>
    </div>
  );
};

export default Card;
