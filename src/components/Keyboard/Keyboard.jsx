import React from "react"
import './Keyboard.scss'

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
    { name: 'ё', value: 'ё', classNames: 'key key-or' },
    { name: '1', value: '1', classNames: 'key key-or' },
    { name: '2', value: '2', classNames: 'key key-or' },
    { name: '3', value: '3', classNames: 'key key-ye' },
    { name: '4', value: '4', classNames: 'key key-gr' },
    { name: '5', value: '5', classNames: 'key key-bl' },
    { name: '6', value: '6', classNames: 'key key-bl' },
    { name: '7', value: '7', classNames: 'key key-pi' },
    { name: '8', value: '8', classNames: 'key key-or' },
    { name: '9', value: '9', classNames: 'key key-ye' },
    { name: '0', value: '0', classNames: 'key key-gr' },
    { name: '-', value: '-', classNames: 'key key-gr' },
    { name: '=', value: '=', classNames: 'key key-gr' },
    { name: 'Backspace', value: 'Backspace', classNames: 'key key-words delete' },
    { name: 'Tab', value: 'Tab', classNames: 'key key-words tab' },
    { name: 'й', value: 'й', classNames: 'key key-or' },
    { name: 'ц', value: 'ц', classNames: 'key key-ye' },
    { name: 'у', value: 'у', classNames: 'key key-gr' },
    { name: 'к', value: 'к', classNames: 'key key-bl' },
    { name: 'е', value: 'е', classNames: 'key key-bl' },
    { name: 'н', value: 'н', classNames: 'key key-pi' },
    { name: 'г', value: 'г', classNames: 'key key-pi' },
    { name: 'ш', value: 'ш', classNames: 'key key-or' },
    { name: 'щ', value: 'щ', classNames: 'key key-ye' },
    { name: 'з', value: 'з ', classNames: 'key key-gr' },
    { name: 'х', value: 'х ', classNames: 'key key-gr' },
    { name: 'ъ', value: 'ъ ', classNames: 'key key-gr' },
    { name: ' /', value: '/', classNames: 'key key-gr key-words backslash' },
    { name: 'CapsLock', value: '', classNames: 'key key-words capslock' },
    { name: 'ф', value: 'ф ', classNames: 'key key-or' },
    { name: 'ы', value: 'ы ', classNames: 'key key-ye' },
    { name: 'в', value: 'в ', classNames: 'key key-gr' },
    { name: 'а', value: 'а', classNames: 'key key-bl' },
    { name: 'п', value: 'п', classNames: 'key key-bl' },
    { name: 'р', value: 'р', classNames: 'key key-pi' },
    { name: 'о', value: 'о', classNames: 'key key-pi' },
    { name: 'л', value: 'л', classNames: 'key key-or' },
    { name: 'д', value: 'д', classNames: 'key key-ye' },
    { name: 'ж', value: 'ж', classNames: 'key key-gr' },
    { name: 'э', value: 'э', classNames: 'key key-gr' },
    { name: 'Enter', value: '', classNames: 'key key-words return' },
    { name: 'Shift ', value: '', classNames: 'key key-words leftshift' },
    { name: 'я', value: 'я', classNames: 'key key-or' },
    { name: 'ч', value: 'ч', classNames: 'key key-ye' },
    { name: 'с', value: 'с', classNames: 'key key-gr' },
    { name: 'м', value: 'м', classNames: 'key key-bl' },
    { name: 'и', value: 'и', classNames: 'key key-bl' },
    { name: 'т', value: 'т', classNames: 'key key-pi' },
    { name: 'ь', value: 'ь', classNames: 'key key-pi' },
    { name: 'б', value: 'б', classNames: 'key key-or' },
    { name: 'ю', value: 'ю', classNames: 'key key-ye' },
    { name: '.', value: '.', classNames: 'key key-gr' },
    { name: 'Shift', value: '', classNames: 'key key-words rightshift' },
    { name: 'Ctrl', value: '', classNames: 'key key-words ctrl' },
    { name: '`', value: '', classNames: 'key key-words nonstyle' },
    { name: 'Alt ', value: '', classNames: 'key key-words ctrl' },
    { name: 'Space', value: ' ', classNames: 'key key-words space' },
    { name: 'Alt', value: '', classNames: 'key key-words ctrl' },
    { name: '', value: '', classNames: 'key key-words ctrl nonstyle' },
    { name: 'Ctrl ', value: '', classNames: 'key key-words ctrl' },
  ];
  const checkKeyIsActive = (name, value) => {
    //Если текущий символ в верхнем регистре, подсвечиваем шифт
    if (name === 'Shift' && currentKey?.trim()) {
      return currentKey === currentKey.toUpperCase()
    }

    return currentKey?.toLowerCase() === value
  }
  return (
    <div className='Keyboard container'>
      <div className="hand">
        <img className="hand_img" src='./img/hand-left.svg' alt="hand" />
        <div className={`lh_finger_little ${lhfl_active ? "key-or" : ""}`}></div>
        <div className={`lh_finger_ring ${lhfr_active ? "key-ye" : ""}`}></div>
        <div className={`lh_finger_middle ${lhfm_active ? "key-gr" : ""}`}></div>
        <div className={`lh_finger_idx ${lhfi_active ? "key-bl" : ""}`}></div>
      </div>
      <div className="keyboard-base">
        {keybordButtons.map(
          ({ name, value, classNames }) => <div
            key={name}
            className={`${checkKeyIsActive(name, value) ? 'active' : ''} ${classNames}`}>
            {name}
          </div>)
        }
      </div>
      <div className="hand">
        <img className="hand_img" src='./img/hand-right.svg' alt="hand" />
        <div className={`rh_finger_little ${rhfl_active ? "key-gr" : ""}`}></div>
        <div className={`rh_finger_ring ${rhfr_active ? "key-ye" : ""}`}></div>
        <div className={`rh_finger_middle ${rhfm_active ? "key-or" : ""}`}></div>
        <div className={`rh_finger_idx ${rhfi_active ? "key-pi" : ""}`}></div>
        <div className={`rh_finger_thumb ${rhft_active ? "key-space" : ""}`}></div>
      </div>
    </div>
  )
}

export default Keyboard