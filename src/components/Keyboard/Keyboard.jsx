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
                  }) => {
  return (
    <div className='Keyboard'>
      {/* <img src='./img/Клавиатура.png' alt="Клавиатура" className="Keyboard-img"/> */}
      <div className="hand">
        <img className="hand_img" src='./img/hand-left.svg' alt="hand"/>
        <div className={`lh_finger_little ${lhfl_active ? "key-or" : ""}`}></div>
        <div className={`lh_finger_ring ${lhfr_active ? "key-ye" : ""}`}></div>
        <div className={`lh_finger_middle ${lhfm_active ? "key-gr" : ""}`}></div>
        <div className={`lh_finger_idx ${lhfi_active ? "key-bl" : ""}`}></div>
      </div>
      <div className="keyboard-base">
        <div className="key key-or">ё</div>
        <div className="key key-or">1</div>
        <div className="key key-or">2</div>
        <div className="key key-ye">3</div>
        <div className="key key-gr">4</div>
        <div className="key key-bl">5</div>
        <div className="key key-bl">6</div>
        <div className="key key-pi">7</div>
        <div className="key key-or">8</div>
        <div className="key key-ye">9</div>
        <div className="key key-gr">0</div>
        <div className="key key-gr">-</div>
        <div className="key key-gr">=</div>
        <div className="key key-words delete">Backspace</div>
        <div className="key key-words tab">Tab</div>
        <div className="key key-or">й</div>
        <div className="key key-ye">ц</div>
        <div className="key key-gr">у</div>
        <div className="key key-bl">к</div>
        <div className="key key-bl">е</div>
        <div className="key key-pi">н</div>
        <div className="key key-pi">г</div>
        <div className="key key-or">ш</div>
        <div className="key key-ye">щ</div>
        <div className="key key-gr">з</div>
        <div className="key key-gr">х</div>
        <div className="key key-gr">ъ</div>
        <div className="key key-gr key-words backslash">\</div>
        <div className="key key-words capslock">CapsLock</div>
        <div className="key key-or">ф</div>
        <div className="key key-ye">ы</div>
        <div className="key key-gr">в</div>
        <div className="key key-bl">а</div>
        <div className="key key-bl">п</div>
        <div className="key key-pi">р</div>
        <div className="key key-pi">о</div>
        <div className="key key-or">л</div>
        <div className="key key-ye">д</div>
        <div className="key key-gr">ж</div>
        <div className="key key-gr">э</div>
        <div className="key key-words return">Enter</div>
        <div className="key key-words leftshift">Shift</div>
        <div className="key key-or">я</div>
        <div className="key key-ye">ч</div>
        <div className="key key-gr">с</div>
        <div className="key key-bl">м</div>
        <div className="key key-bl">и</div>
        <div className="key key-pi">т</div>
        <div className="key key-pi">ь</div>
        <div className="key key-or">б</div>
        <div className="key key-ye">ю</div>
        <div className="key key-gr">.</div>
        <div className="key key-words rightshift">Shift</div>
        <div className="key key-words ctrl">Ctrl</div>
        <div className="key key-words nonstyle"></div>
        <div className="key key-words ctrl">Alt</div>
        <div className="key key-words space">Space</div>
        <div className="key key-words ctrl">Alt</div>
        <div className="key key-words ctrl nonstyle"></div>
        <div className="key key-words ctrl">Ctrl</div>
      </div>
      <div className="hand">
        <img className="hand_img" src='./img/hand-right.svg' alt="hand"/>
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