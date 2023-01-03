import React from "react";
import './Rating.scss';

const Rating = () => {
  return (
    <div className="rating-page">
      <div className="container rating-container">
        <h2 className="rating-title">Рейтинг пользователей</h2>
        <div className="rating-box">
          <div className="rating-item rating-item_first">
              <div className="rating-position">1</div>
            <div className="rating-name">Иванов Иван</div>
            <div className="rating-stats">
              <div className="rating-percent">99.99%</div>
              <div className="rating-charMin">400 зн/мин</div>
            </div>
          </div>
          <div className="rating-item">
            <div className="rating-position">196</div>
            <div className="rating-name">Иванов Иван</div>
            <div className="rating-stats">
              <div className="rating-percent">99.99%</div>
              <div className="rating-charMin">400 зн/мин</div>
            </div>
          </div>
          <div className="rating-item">
            <div className="rating-position">197</div>
            <div className="rating-name">Иванов Иван</div>
            <div className="rating-stats">
              <div className="rating-percent">99.99%</div>
              <div className="rating-charMin">400 зн/мин</div>
            </div>
          </div>
          <div className="rating-item rating-item_p">
            <div className="rating-position">198</div>
            <div className="rating-name">Иванов Иван</div>
            <div className="rating-stats">
              <div className="rating-percent">99.99%</div>
              <div className="rating-charMin">400 зн/мин</div>
            </div>
          </div>
          <div className="rating-item">
            <div className="rating-position">199</div>
            <div className="rating-name">Иванов Иван</div>
            <div className="rating-stats">
              <div className="rating-percent">99.99%</div>
              <div className="rating-charMin">400 зн/мин</div>
            </div>
          </div>
          <div className="rating-item">
            <div className="rating-position">200</div>
            <div className="rating-name">Иванов Иван</div>
            <div className="rating-stats">
              <div className="rating-percent">99.99%</div>
              <div className="rating-charMin">400 зн/мин</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rating;
