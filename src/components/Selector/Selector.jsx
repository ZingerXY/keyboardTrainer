import React, {useState} from 'react';
import Style from "./Selector.module.scss";


const Selector = ({fields, onClickFunction, heading})  => {
  const [selectState, setSelectState] = useState(true);

  const selectOpen = () => {
    setSelectState(!selectState)
  }

  return (
    <div className={`${Style["__select"]} ${selectState ? Style["__select_active"] : ""}`}
          onClick={selectOpen}>
      <div className={`${Style["__select__title"]}`}>{heading}</div>
      <div className={`${Style["__select__content"]}`}>
        {
          fields.map((field, index) => {
            return (
              <div 
                key={index}
                className={`${Style["__select__label"]}`}
                onClick={() => onClickFunction(field)}
              >
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
                >
                  {field}
                </label>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default Selector;
