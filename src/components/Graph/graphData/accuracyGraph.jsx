import { faker } from '@faker-js/faker';

const labels = ['10.10.22', '10.10.22', '10.10.22', '10.10.22', '10.10.22', '10.10.22', '10.10.22'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 900 })),
      borderColor: 'red',
      backgroundColor: 'black',
      borderWidth: 2,
      tension: 0.4,
    },
  ],
};