import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {faker} from '@faker-js/faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);




export const options = {
  plugins: {
    // title: {
    //   display: true,
    //   text: 'Chart.js Bar Chart - Stacked',
    // },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        drawOnChartArea: false,
        display: false,
        drawBorder: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        drawOnChartArea: false,
        display: false,
        drawBorder: false,
      },
      
    },
  },
};

const labels = ["Red",
"Blue",
"Yellow",
"Green",
"Purple",
"Orange",];

export const data = {
  labels,
  datasets: [
    {
      label: "# of Votes",
      data: [20, 15, 13, 10, 15, 13],
      backgroundColor: ["#31609A"],
      borderColor: ["#31609A"],
      borderWidth: 1,
      borderRadius: 2
    },
    {
      label: "# of Votes",
      data: [5, 10, 12, 15, 10, 12],
      backgroundColor: ["#E1E1E1"],
      borderColor: ["#E1E1E1"],
      borderWidth: 1,
    },
    
  ],
};


 
function Barchart() {

  return(
    
    <>
     <Bar options={options} data={data} style={{height:""}}/>
    </>
  
  )
}
export default Barchart