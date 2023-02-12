import React, { useEffect, useState } from "react"

import Style from "./Keyboard.module.scss";
import { useSelector } from "react-redux";
import { generateKeyboard } from '../../lib/keyboard/generateKeyboard';

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
  const [keys, setKeys] = useState({
    firstLine: [],
    secondLine: [],
    thirdLine: [],
    fourthLine: [],
  });
  const { language_keys, language } = useSelector((state) => state.DataReducer);

  const keybordKeys = [
    { name: keys.firstLine[0], classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: keys.firstLine[1], classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: keys.firstLine[2], classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: keys.firstLine[3], classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: keys.firstLine[4], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: keys.firstLine[5], classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: keys.firstLine[6], classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: keys.firstLine[7], classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: keys.firstLine[8], classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: keys.firstLine[9], classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: keys.firstLine[10], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: keys.firstLine[11], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: keys.firstLine[12], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'Backspace', value: 'Backspace', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["delete"]}` },
    { name: 'Tab', value: 'Tab', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["tab"]}` },
    { name: keys.secondLine[0], classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: keys.secondLine[1], classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: keys.secondLine[2], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: keys.secondLine[3], classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: keys.secondLine[4], classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: keys.secondLine[5], classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: keys.secondLine[6], classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: keys.secondLine[7], classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: keys.secondLine[8], classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: keys.secondLine[9], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: keys.secondLine[10], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: keys.secondLine[11], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: '/', value: '/', classNames: `${Style["key"]} ${Style["ctrl"]} ${Style["key-words"]} ${Style["backslash"]}` },
    { name: 'CapsLock', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["capslock"]}` },
    { name: keys.thirdLine[0], classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: keys.thirdLine[1], classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: keys.thirdLine[2], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: keys.thirdLine[3], classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: keys.thirdLine[4], classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: keys.thirdLine[5], classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: keys.thirdLine[6], classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: keys.thirdLine[7], classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: keys.thirdLine[8], classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: keys.thirdLine[9], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: keys.thirdLine[10], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'Enter', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["return"]}` },
    { name: 'Shift', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["leftshift"]}` },
    { name: keys.fourthLine[0], classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: keys.fourthLine[1], classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: keys.fourthLine[2], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: keys.fourthLine[3], classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: keys.fourthLine[4], classNames: `${Style["key"]} ${Style["key-bl"]}` },
    { name: keys.fourthLine[5], classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: keys.fourthLine[6], classNames: `${Style["key"]} ${Style["key-pi"]}` },
    { name: keys.fourthLine[7], classNames: `${Style["key"]} ${Style["key-or"]}` },
    { name: keys.fourthLine[8], classNames: `${Style["key"]} ${Style["key-ye"]}` },
    { name: keys.fourthLine[9], classNames: `${Style["key"]} ${Style["key-gr"]}` },
    { name: 'Shift', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["rightshift"]}` },
    { name: "Ctrl", value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["ctrl"]}` },
    { name: '', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["nonstyle"]}` },
    { name: 'Alt', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["ctrl"]}` },
    { name: 'Space', value: ' ', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["space"]}` },
    { name: 'Alt', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["ctrl"]}` },
    { name: '', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["ctrl"]} ${Style["nonstyle"]}` },
    { name: 'Ctrl', value: '', classNames: `${Style["key"]} ${Style["key-words"]} ${Style["ctrl"]}` },
  ];
  const checkKeyIsActive = (name, value) => {
    //Если текущий символ в верхнем регистре, подсвечиваем шифт! НЕ УДАЛЯТЬ ЗАКОМЕНТИРОВАННУЮ ОБЛАСТЬ НИЖЕ
    // if (name === 'Shift' && currentKey?.trim()) {
    //   return currentKey === currentKey.toUpperCase()
    // }
    const active = value ? value : name;

    return currentKey === active;
  }

  useEffect(() => {
    const keys = generateKeyboard(language_keys);

    setKeys(keys)
  }, [language]);

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
        {keybordKeys.map(
          ({ name, value, classNames }, index) =>
            <div
              key={index}
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