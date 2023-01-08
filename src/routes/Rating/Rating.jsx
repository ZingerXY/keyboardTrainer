import React from "react";
import Style from "./Rating.module.scss";

const Rating = () => {
  return (
    <div className={`${Style["rating-page"]}`}>
      <div className={`container ${Style["rating-container"]}`}>
        <h2 className={`${Style["rating-title"]}`}>Рейтинг пользователей</h2>
        <div className={`${Style["rating-box"]}`}>
          <div className={`${Style["rating-item"]} ${Style["rating-item_first"]}`}>
              <div className={`${Style["rating-position"]}`}>1</div>
            <div className={`${Style["rating-name"]}`}>Иванов Иван</div>
            <div className={`${Style["rating-stats"]}`}>
              <div className={`${Style["rating-percent"]}`}>99.99%</div>
              <div className={`${Style["rating-charMin"]}`}>400 зн/мин</div>
            </div>
          </div>
          <div className={`${Style["rating-item"]}`}>
            <div className={`${Style["rating-position"]}`}>196</div>
            <div className={`${Style["rating-name"]}`}>Иванов Иван</div>
            <div className={`${Style["rating-stats"]}`}>
              <div className={`${Style["rating-percent"]}`}>99.99%</div>
              <div className={`${Style["rating-charMin"]}`}>400 зн/мин</div>
            </div>
          </div>
          <div className={`${Style["rating-item"]}`}>
            <div className={`${Style["rating-position"]}`}>197</div>
            <div className={`${Style["rating-name"]}`}>Иванов Иван</div>
            <div className={`${Style["rating-stats"]}`}>
              <div className={`${Style["rating-percent"]}`}>99.99%</div>
              <div className={`${Style["rating-charMin"]}`}>400 зн/мин</div>
            </div>
          </div>
          <div className={`${Style["rating-item"]} ${Style["rating-item_p"]}`}>
            <div className={`${Style["rating-position"]}`}>198</div>
            <div className={`${Style["rating-name"]}`}>Иванов Иван</div>
            <div className={`${Style["rating-stats"]}`}>
              <div className={`${Style["rating-percent"]}`}>99.99%</div>
              <div className={`${Style["rating-charMin"]}`}>400 зн/мин</div>
            </div>
          </div>
          <div className={`${Style["rating-item"]}`}>
            <div className={`${Style["rating-position"]}`}>199</div>
            <div className={`${Style["rating-name"]}`}>Иванов Иван</div>
            <div className={`${Style["rating-stats"]}`}>
              <div className={`${Style["rating-percent"]}`}>99.99%</div>
              <div className={`${Style["rating-charMin"]}`}>400 зн/мин</div>
            </div>
          </div>
          <div className={`${Style["rating-item"]}`}>
            <div className={`${Style["rating-position"]}`}>200</div>
            <div className={`${Style["rating-name"]}`}>Иванов Иван</div>
            <div className={`${Style["rating-stats"]}`}>
              <div className={`${Style["rating-percent"]}`}>99.99%</div>
              <div className={`${Style["rating-charMin"]}`}>400 зн/мин</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
