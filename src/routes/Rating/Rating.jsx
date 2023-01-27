import React, { useEffect, useState } from "react";
import Style from "./Rating.module.scss";
import axios from "axios";
import RatingItem from "../../components/RatingItem/RatingItem";

const Rating = () => {
  const [ rating, setRating ] = useState([]);
  const [ allStats, setAllStats ] = useState(null);
  const [ count, setCount ] = useState(6);
  const [ users, setUsers ] = useState([]);
  const [ update, setUpdate ] = useState(false);

  const myId = 15;
  const URL_HOST = "https://kangaroo.zingery.ru";
  
  const apiGetStats = () => {
    axios.get(`${URL_HOST}/api/stats`).then((response) => {
      setAllStats([...response.data.data]);
      handleScroll();
    });
  };
  const apiGetUserById = (id) => {
    axios.get(`${URL_HOST}/api/stats/${id}`).then((response) => {
      return response.data;
    });
  };

  const initContent = () => {
    
    if (allStats !== null) {
      let usersId = [];
      for (let i = 0; i < allStats.length; i++) {
        if (usersId.length === 12) break;
        const userId = allStats[i].player_id;
        if (!usersId.includes(userId)) {
          usersId = [...usersId, userId];
        }
      }
      setRating([...usersId]);
    }
  }
  useEffect(() => {
    if (allStats === null) {
      apiGetStats();
    } else if (rating.length === 0) {
      initContent();
    } else if (update) {
      setTimeout(() => setCount(prev => prev += 2), 300);
    }
    document.addEventListener("scroll", handleScroll);
    return window.removeEventListener("scroll", handleScroll);
  }, [update]);

  const writeCards = (cout) => {
    const myArr = rating.slice(0, cout);
    let position = 1;
    return (
      myArr.map((user, index) => {
        let styleCard = ``;
        if (position === 1) {
          styleCard = Style["rating-item_first"];
        } 
        else if (position === 9) {
          styleCard = Style["rating-item_p"];
        }
        return (
          <RatingItem
            style={styleCard}
            // accuracy={checkAccuracy(user.stats)}
            // speed={checkSpeed(user.stats)}
            // userName={user.username}
            position={position++}
            key={index}
          />
        )
      })
    );
  };

  //-----------------------------------------------------------------------------------------------

  // const userName = "Cara Frazier"; // имя пользователя, который пользуется сайтом
  

  // const apiMethod = ({start, count}) => {
  //   axios.get(`${URL_HOST}/api/users`).then((response) => {
  //     const data = response.data.data.slice(start, start+count);
  //     setUsers((prev) => [...prev, ...data]);
  //   });
  // };

  // const initContent = () => {
  //   axios.get(`${URL_HOST}/api/users`).then((response) => {
  //     setUsers([...response.data.data.slice(0, 8)]);
  //   });
  // }

  // useEffect(() => {
  //   const total = 20;
  //   if (users === null) {
  //     initContent();
  //   } else if(users.length < total && update) {
  //     handleScroll();
  //     setTimeout(() => apiMethod({ start: users.length, count: 8 }), 300);
  //   }
  //   document.addEventListener("scroll", handleScroll);
  //   return window.removeEventListener("scroll", handleScroll);
  // }, [update]);

  const handleScroll = () => {
    setUpdate(window.pageYOffset + window.innerHeight === document.body.clientHeight);
  };

  // const checkAccuracy = (stats) => {
  //   let accuracy = 0;
  //   stats.forEach(element => {
  //     accuracy += element.Accuracy;
  //   });
  //   return Math. round(stats.length !== 0 ? accuracy / stats.length : 0);
  // };

  // const checkSpeed = (stats) => {
  //   let speed = 0;
  //   stats.forEach(element => {
  //     speed += element.dial_speeds;
  //   });
  //   return Math. round(stats.length !== 0 ? speed / stats.length : 0);
  // };

  // if (!users) return null;

  // const writeCards = () => {
  //   return (
  //     users.map((user, index) => {
        
  //       let styleCard = ``;
  //       if (user.id === 1) {
  //         styleCard = Style["rating-item_first"];
  //       } else if (user.username === userName) {
  //         styleCard = Style["rating-item_p"];
  //       }
  //       return (
  //         <RatingItem
  //           style={styleCard}
  //           accuracy={checkAccuracy(user.stats)}
  //           speed={checkSpeed(user.stats)}
  //           userName={user.username}
  //           position={user.id}
  //           key={index}
  //         />
  //       )
  //     })
  //   );
  // };

  

  return (
    <div className={`${Style["rating-page"]}`}>
      <div className={`container ${Style["rating-container"]}`}>
        <h2 className={`${Style["rating-title"]}`}>Рейтинг пользователей</h2>
        <div className={`${Style["rating-box"]}`}>
          {writeCards(count)}
        </div>
      </div>
    </div>
  );
};

export default Rating;
