import React, { useEffect, useState } from "react";
import Style from "./Rating.module.scss";
import axios from "axios";
import RatingItem from "../../components/RatingItem/RatingItem";

const Rating = () => {
  const [ ratingList, setRatingList ] = useState([]);
  const [ allUsers, setAllUsers ] = useState([]);
  const [ allStats, setAllStats ] = useState(null);
  const [ myStats, setMyStats] = useState({position: "---", username: "---", accuracy: "---", speed: "---"});
  const [ range, setRange ] = useState(6);
  
  const [ update, setUpdate ] = useState(false);

  const myId = 11;
  const URL_HOST = "https://kangaroo.zingery.ru";
  
  const apiGetStats = async () => {
    await axios.get(`${URL_HOST}/api/users`).then((response) => {
      setAllUsers([...response.data.data]);
      getMyName(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
    await axios.get(`${URL_HOST}/api/stats`).then((response) => {
      filterStats(response.data.stats);
      handleScroll();
    })
    .catch(function (error) {
      console.log(error);
    });
  };
  const getMyName = (data) => {
    const myName = data.find(el => el.id === myId);
    if (myName !== undefined)
      setMyStats(prev => {
        prev.username = myName.username;
        return prev;
      }); 
  };
  const getMyStats = (data) => {
    let myStats = data.find(el => el.player_id === myId);
    if (myStats !== undefined)
      setMyStats(prev => {
        prev.speed = myStats.dial_speeds;
        prev.accuracy = myStats.Accuracy;
        prev.position = data.findIndex(el => el.player_id === myId) + 1;
        return prev;
      });
  }
  const filterStats = (data) => {
    const newData = [];
    for (let i = 0; i < data.length; i++) {
      if (!(newData.filter(el => el.player_id === data[i].player_id).length >= 1)) {
        newData.push(data[i]);
      }
    }
    getMyStats(newData);
    setAllStats(newData);
  };
  const initRatingList = () => {
    if (allStats !== null) {
      setRatingList(() => {
        const rating = [];
        for (let i = 0; i < allStats.length; i++) {
          if (rating.length === 12) break;
          const username = allUsers.find(el => el.id === allStats[i].player_id).username;
          rating.push(
            {
              id: allStats[i].player_id,
              username: username,
              speed: allStats[i].dial_speeds,
              accuracy: allStats[i].Accuracy
            }
          );
        }
        return rating;
      });
    }
  };

  const handleScroll = () => {
    setUpdate(window.pageYOffset + window.innerHeight === document.body.clientHeight);
  };

  const writeCards = (range) => {
    if (ratingList.length > 0) {
      const usersid = ratingList.slice(0, range);
      let position = 1;
      let inTop = false;
      return (
        <>
          {usersid.map((user, index) => {
            let styleCard = ``;
            if (position === 1) {
              styleCard = Style["rating-item_first"];
              if (position === myStats.position) inTop = true;
            } else if (position === myStats.position) {
              styleCard = Style["rating-item_p"];
              inTop = true;
            }
            return (
              <RatingItem
                style={styleCard}
                accuracy={user.accuracy}
                speed={user.speed}
                userName={user.username}
                position={position++}
                key={index}
              />
            )
          })}
          { inTop ? "" : 
            <>
              <hr className={`${Style["rating-barrier"]}`}/>
              <RatingItem
                style={Style["rating-item_p"]}
                accuracy={myStats.accuracy}
                speed={myStats.speed}
                userName={myStats.username}
                position={myStats.position}
              />
            </>
          }
        </>
      );
    } else {
      return ("loading ...");
    }
  };

  useEffect(() => {
    if (allStats === null) {
      apiGetStats();
    } else if (ratingList.length === 0) {
      initRatingList();
    } else if (update) {
      setTimeout(() => setRange(prev => prev += 2), 300);
    }
    document.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  }, [update]);

  return (
    <div className={`${Style["rating-page"]}`}>
      <div className={`container ${Style["rating-container"]}`}>
        <h2 className={`${Style["rating-title"]}`}>Рейтинг пользователей</h2>
        <div className={`${Style["rating-box"]}`}>
          {writeCards(range)}
        </div>
      </div>
    </div>
  );
};

export default Rating;