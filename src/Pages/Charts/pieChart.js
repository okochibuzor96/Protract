import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "red",
        'blue',
        'yellow',
        'green',
        'purple',
        'orange'

      ],
      backgroundColor: [
        "red",
        'blue',
        'yellow',
        'green',
        'purple',
        'orange'

      ],
      borderWidth: 1,
    },
  ],
};



function Piechart() {
  return (
    <div>
      <Pie data={data} />
    </div>
  )
}

export default Piechart