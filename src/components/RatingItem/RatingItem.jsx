import React from "react";
import Style from "../../routes/Rating/Rating.module.scss";

const RatingItem = (props) => {
    return(
        <>
            <div className={`${Style["rating-item"]} ${props.style}`}>
            <div className={`${Style["rating-position"]}`}>{props.position}</div>
            <div className={`${Style["rating-name"]}`}>{props.userName}</div>
            <div className={`${Style["rating-stats"]}`}>
                <div className={`${Style["rating-percent"]}`}>{props.accuracy} %</div>
                <div className={`${Style["rating-charMin"]}`}>{props.speed} зн/мин</div>
            </div>
            </div>
        </>
    );
};

export default RatingItem;