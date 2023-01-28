import React, { useEffect, useState } from "react";
import Style from "./Rating.module.scss";
import axios from "axios";
import RatingItem from "../../components/RatingItem/RatingItem";

const Rating = () => {
  const [users, setUsers] = useState(null);
  const userName = "Dalton Newton";
  const URL_HOST = "https://kangaroo.zingery.ru";
  useEffect(() => {
    axios.get(`${URL_HOST}/api/users?id=1`).then((response) => {
      setUsers(response.data.data);
    });
  }, []);

  if (!users) return null;

  return (
    <div className={`${Style["rating-page"]}`}>
      <div className={`container ${Style["rating-container"]}`}>
        <h2 className={`${Style["rating-title"]}`}>Рейтинг пользователей</h2>
        <div className={`${Style["rating-box"]}`}>
          {users.map((user, index) => {
            let styleCard = ``;
            if (user.id === 1) {
              styleCard = Style["rating-item_first"];
            } else if (user.username === userName) {
              styleCard = Style["rating-item_p"];
            }
            return (
              <RatingItem
                style={styleCard}
                userName={user.username}
                position={user.id}
                key={index}
              />
            )
              
          })}
        </div>
      </div>
    </div>
  );
};

export default Rating;
