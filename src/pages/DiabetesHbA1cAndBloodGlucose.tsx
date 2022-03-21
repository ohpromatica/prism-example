import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

export const options = {
    responsive: true,
    plugins: {
        title: {
        display: true,
        text: 'HbA1c Control Range (mmol/mol)',
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const data = {
    labels,
    datasets: [
        {
        data: [60, 70, 70, 80, 60, 70, 74, 70, 72, 66, 70, 72],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        fill: '+1'
        },
        {
        data: [45, 40, 48, 50, 40, 38, 45, 47, 45, 42, 45, 40],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        fill: '-1'
        },
    ],
};

function DiabetesHbA1cAndBloodGlucose() {
  return (
    <div>
      Diabetes HbA1c and Blood Glucose

      <div className='flex flex-row'>
        <div className='w-1/2 p-1 m-1 border-t-4 border-gray-300 bg-slate-50'>
            <h2 className='text-slate-500'>HbA1c</h2>
            <Line options={options} data={data} />
        </div>
        <div className='w-1/2 p-1 m-1 border-t-4 border-gray-300 bg-slate-50'>
            <h2 className='text-slate-500'>Blood Glucose</h2>
            <Line options={options} data={data} />
        </div>
      </div>    
    </div>
  )
}

export default DiabetesHbA1cAndBloodGlucose