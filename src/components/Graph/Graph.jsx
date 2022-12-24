import React, { useState } from "react";
import GraphStyles from './Graph.module.scss'

const Graph = () => {

    const [activeBtn, setActiveBtn] = useState(0);

    const setDraw = (e) => {
        console.log(e.target.tagName)
        if (e.target.tagName == "BUTTON") {
            if (activeBtn) activeBtn.classList.remove(GraphStyles.opened)
            console.log(e.target.parentElement)
            setActiveBtn(e.target)
            e.target.classList.add(GraphStyles.opened)
        } else {
            console.log(e.target.parentElement)
            if (activeBtn) activeBtn.classList.remove(GraphStyles.opened)
            e.target.parentElement.classList.add(GraphStyles.opened)
            setActiveBtn(e.target.parentElement)
        }
        
    }
    return (
        <div className={GraphStyles.statistics_draw_part}>
                <div className={GraphStyles.statistics_draw_selection}>
                    <button className={GraphStyles.statistics_draw_btn } onClick={setDraw}>
                        <span className={GraphStyles.statistics_draw_btn_txt}>
                        Скорость
                        </span>
                        </button>
                    <button className={GraphStyles.statistics_draw_btn} onClick={setDraw}>
                        <span className={GraphStyles.statistics_draw_btn_txt}>
                        Аккуратность
                        </span>
                        </button>
                    <button className={GraphStyles.statistics_draw_btn} onClick={setDraw}>
                        <span className={GraphStyles.statistics_draw_btn_txt}>
                        Ошибки
                        </span>
                        </button>
                </div>
                <div className={GraphStyles.statistics_draw_graph}>
                    <img src="./img/Frame 32.png" alt="graph" />
                </div>
            </div>
        
    )
}

export default Graph