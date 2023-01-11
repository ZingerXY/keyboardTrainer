import { faker } from '@faker-js/faker';

const labels = ['10.10.22', '10.10.22', '10.10.22', '10.10.22', '10.10.22', '10.10.22', '10.10.22'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 900 })),
      borderColor: 'blue',
      backgroundColor: 'red',
      borderWidth: 4,
      tension: 0.2,
    },
  ],
};