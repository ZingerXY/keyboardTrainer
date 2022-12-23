import React from "react"
import './Keyboard.scss'

const Keyboard = () => {
    return (
        <div className='Keyboard'>
            {/* <img src='./img/Клавиатура.png' alt="Клавиатура" className="Keyboard-img"/> */}
            <div className="hand">
                <img src='./img/hand-left.jpg' alt="hand" />
            </div>
            <div class="keyboard-base">
                <div class="key key-or">ё</div>
                <div class="key key-or">1</div>
                <div class="key key-or">2</div>
                <div class="key key-ye">3</div>
                <div class="key key-gr">4</div>
                <div class="key key-bl">5</div>
                <div class="key key-bl">6</div>
                <div class="key key-pi">7</div>
                <div class="key key-or">8</div>
                <div class="key key-ye">9</div>
                <div class="key key-gr">0</div>
                <div class="key key-gr">-</div>
                <div class="key key-gr">=</div>
                <div class="key key-words delete">Backspace</div>
                <div class="key key-words tab">Tab</div>
                <div class="key key-or">й</div>
                <div class="key key-ye">ц</div>
                <div class="key key-gr">у</div>
                <div class="key key-bl">к</div>
                <div class="key key-bl">е</div>
                <div class="key key-pi">н</div>
                <div class="key key-pi">г</div>
                <div class="key key-or">ш</div>
                <div class="key key-ye">щ</div>
                <div class="key key-gr">з</div>
                <div class="key key-gr">х</div>
                <div class="key key-gr">ъ</div>
                <div class="key key-gr key-words backslash">\</div>
                <div class="key key-words capslock">CapsLock</div>
                <div class="key key-or">ф</div>
                <div class="key key-ye">ы</div>
                <div class="key key-gr">в</div>
                <div class="key key-bl">а</div>
                <div class="key key-bl">п</div>
                <div class="key key-pi">р</div>
                <div class="key key-pi">о</div>
                <div class="key key-or">л</div>
                <div class="key key-ye">д</div>
                <div class="key key-gr">ж</div>
                <div class="key key-gr">э</div>
                <div class="key key-words return">Enter</div>
                <div class="key key-words leftshift">Shift</div>
                <div class="key key-or">я</div>
                <div class="key key-ye">ч</div>
                <div class="key key-gr">с</div>
                <div class="key key-bl">м</div>
                <div class="key key-bl">и</div>
                <div class="key key-pi">т</div>
                <div class="key key-pi">ь</div>
                <div class="key key-or">б</div>
                <div class="key key-ye">ю</div>
                <div class="key key-gr">.</div>
                <div class="key key-words rightshift">Shift</div>
                <div class="key key-words ctrl">Ctrl</div>
                <div class="key key-words nonstyle"></div>
                <div class="key key-words ctrl">Alt</div>
                <div class="key key-words space">Space</div>
                <div class="key key-words ctrl">Alt</div>
                <div class="key key-words ctrl nonstyle"></div>
                <div class="key key-words ctrl">Ctrl</div>

            </div>
            <div className="hand">
                <img src='./img/hand-right.jpg' alt="hand" />
            </div>
        </div>
    )
}

export default Keyboard