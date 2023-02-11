import React from "react";
import Style from "./Level.module.scss";

const Level = ({level}) => {
    let levelArr = [0, 0, 0, 0, 0];
    for (let i = 0; i < level; i++) {
        levelArr[i] = 1;
    }
    return (
        <>
            <ul className={`${Style["level-box"]}`}>
                {levelArr.map((el, id) =>
                    el === 1 ? (
                    <li
                        key={id}
                        className={`${Style["level-point"]} ${Style["level-active"]}`}
                    ></li>
                    ) : (
                    <li key={id} className={`${Style["level-point"]}`}></li>
                    )
                )}
            </ul>
        </>
    );
}

export default Level;