import React from "react"
import Style from "./Keyboard.module.scss";

const Keyboard = ({
  lhfl_active,
  lhfr_active,
  lhfm_active,
  lhfi_active,
  rhfl_active,
  rhfr_active,
  rhfm_active,
  rhfi_active,
  rhft_active,
  startWord,
}) => {
  const currentKey = startWord?.[0];

  const keybordButtons = [
    { name: 'ё', value: 'ё', classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: '1', value: '1', classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: '2', value: '2', classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: '3', value: '3', classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: '4', value: '4', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: '5', value: '5', classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: '6', value: '6', classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: '7', value: '7', classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: '8', value: '8', classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: '9', value: '9', classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: '0', value: '0', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: '-', value: '-', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: '=', value: '=', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'Backspace', value: 'Backspace', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["delete"]}` },
    { name: 'Tab', value: 'Tab', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["tab"]}` },
    { name: 'й', value: 'й', classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: 'ц', value: 'ц', classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: 'у', value: 'у', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'к', value: 'к', classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: 'е', value: 'е', classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: 'н', value: 'н', classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: 'г', value: 'г', classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: 'ш', value: 'ш', classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: 'щ', value: 'щ', classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: 'з', value: 'з ', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'х', value: 'х ', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'ъ', value: 'ъ ', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: ' /', value: '/', classNames: `${Style["key"]} ${Style["key-gr"]} ${Style["key-words"]} ${Style["backslash"]}` },
    { name: 'CapsLock', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["capslock"]}` },
    { name: 'ф', value: 'ф ', classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: 'ы', value: 'ы ', classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: 'в', value: 'в ', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'а', value: 'а', classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: 'п', value: 'п', classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: 'р', value: 'р', classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: 'о', value: 'о', classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: 'л', value: 'л', classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: 'д', value: 'д', classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: 'ж', value: 'ж', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'э', value: 'э', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'Enter', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["return"]}` },
    { name: 'Shift ', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["leftshift"]}` },
    { name: 'я', value: 'я', classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: 'ч', value: 'ч', classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: 'с', value: 'с', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'м', value: 'м', classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: 'и', value: 'и', classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: 'т', value: 'т', classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: 'ь', value: 'ь', classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: 'б', value: 'б', classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: 'ю', value: 'ю', classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: '.', value: '.', classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'Shift', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["rightshift"]}` },
    { name: 'Ctrl', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["ctrl"]}` },
    { name: '`', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["nonstyle"]}` },
    { name: 'Alt ', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["ctrl"]}` },
    { name: 'Space', value: ' ', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["space"]}` },
    { name: 'Alt', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["ctrl"]}` },
    { name: '', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["ctrl"]} ${Style["nonstyle"]}` },
    { name: 'Ctrl ', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["ctrl"]}` },
  ];
  const checkKeyIsActive = (name, value) => {
    //Если текущий символ в верхнем регистре, подсвечиваем шифт
    if (name === 'Shift' && currentKey?.trim()) {
      return currentKey === currentKey.toUpperCase()
    }

    return currentKey?.toLowerCase() === value
  }
  return (
    <div className={`${Style["Keyboard"]} container`}>
      <div className={`${Style["hand"]}`}>
        <img className={`${Style["hand_img"]}`} src='./img/hand-left.svg' alt="hand" />
        <div className={`${Style["lh_finger_little"]} ${lhfl_active ? Style["key-or"] : ""}`}></div>
        <div className={`${Style["lh_finger_ring"]} ${lhfr_active ? Style["key-ye"] : ""}`}></div>
        <div className={`${Style["lh_finger_middle"]} ${lhfm_active ? Style["key-gr"] : ""}`}></div>
        <div className={`${Style["lh_finger_idx"]} ${lhfi_active ? Style["key-bl"] : ""}`}></div>
      </div>
      <div className={`${Style["keyboard-base"]}`}>
        {keybordButtons.map(
          ({ name, value, classNames }) => <div
            key={name}
            className={`${checkKeyIsActive(name, value) ? Style["active"] : ''} ${classNames}`}>
            {name}
          </div>)
        }
      </div>
      <div className={`${Style["hand"]}`}>
        <img className={`${Style["hand_img"]}`} src='./img/hand-right.svg' alt="hand" />
        <div className={`${Style["rh_finger_little"]} ${rhfl_active ? Style["key-gr"] : ""}`}></div>
        <div className={`${Style["rh_finger_ring"]} ${rhfr_active ? Style["key-ye"] : ""}`}></div>
        <div className={`${Style["rh_finger_middle"]} ${rhfm_active ? Style["key-or"] : ""}`}></div>
        <div className={`${Style["rh_finger_idx"]} ${rhfi_active ? Style["key-pi"] : ""}`}></div>
        <div className={`${Style["rh_finger_thumb"]} ${rhft_active ? Style["key-space"] : ""}`}></div>
      </div>
    </div>
  )
}

export default Keyboard