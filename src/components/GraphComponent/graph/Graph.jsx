import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
  },
  maintainAspectRatio: false
};

const Graph = ({dataFromDB, name, color, datePeriod}) => {
  const dates = [
    new Date('01/02/2022'),
    new Date('11/14/2022'),
    new Date('02/10/2023'),
    new Date('02/01/2023')];

  const [filteredDates, setFilteredDates] = useState([...dates]);

  let values = dataFromDB.map(value => value[`${name}`]).concat([120, 150]);

  useEffect(() => {
    switch(datePeriod){
      case 'За всё время':
        setFilteredDates([...dates]);
        break;

      case 'За 3 месяца': 
        const dateTheeMonthsAgo = new Date(Date.now() - 1000*60*60*24*90).getTime();
        setFilteredDates([...dates.filter(date => date.getTime() > dateTheeMonthsAgo)]);
        break;
      case 'За месяц': 
        const dateOneMonthsAgo = new Date(Date.now() - 1000*60*60*24*30).getTime();
        setFilteredDates([...dates.filter(date => date.getTime() > dateOneMonthsAgo)]);
        break;
    }
  }, [datePeriod]);

  const labels = filteredDates.map(date => date.toLocaleDateString());


  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: values,
        borderColor: color,
        backgroundColor: 'black',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  return (
    <Line 
      options={options}
      data={data}
    />
  );
}

export default Graph;