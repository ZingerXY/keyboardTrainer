import React, { useState } from "react";
import GraphStyles from './styles/Graph.module.scss'

const Graph = () => {

    const [activeBtn, setActiveBtn] = useState(0);

    const setDraw = (e) => {
        if (activeBtn) {
            activeBtn.classList.remove(GraphStyles.opened)
            setActiveBtn(e.target)
            e.target.classList.add(GraphStyles.opened)
        } else {
            e.target.classList.add(GraphStyles.opened)
            setActiveBtn(e.target)
        }
        
    }
    return (
        <div className={GraphStyles.statistics_draw_part}>
                <div className={GraphStyles.statistics_draw_selection}>
                    <button className={GraphStyles.statistics_draw_btn} onClick={setDraw}>
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