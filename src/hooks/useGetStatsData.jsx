import axios from "axios";
import { useEffect, useState } from "react";

export const useGetStatsData = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_SERVER_URL + 'users/4')
    .then((res) => {
      console.log(res);
      setData(res.data.data.stats);
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      setLoading(false);
    })
  }, [])

  return {loading, data};
}