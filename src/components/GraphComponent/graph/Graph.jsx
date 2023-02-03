import React, { useEffect } from 'react';
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

const Graph = ({dataFromDB}) => {
  const labels = Array(dataFromDB.length).fill('10.10.22'); 

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: dataFromDB,
        borderColor: 'red',
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