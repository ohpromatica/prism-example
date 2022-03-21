import React from 'react'
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = [
      'Heart Failure', 
      'Osteperosis', 
      'Dementia', 
      'Cancer', 
      'Learning Disabilities', 
      'Asthma', 
      'Epilepsy'
    ];

export const data = {
  labels,
  datasets: [
    {
      label: 'Average',
      data: [235, 113, 159, 780, 86, 231, 336],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      stack: "2",
    },
    {
      label: 'Current',
      data: [235, 113, 159, 780, 86, 231, 336],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      stack: "2",
    },
    {
        label: 'Potential',
        data: [235, 113, 159, 780, 86, 231, 336],
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
        stack: "1"
    }
  ],
};


function PopulanceCard() {
  return (
    <div className='w-3/4 h-auto p-2 mx-10 my-5 shadow-xl bg-slate-50'>
        <h2 className='font-semibold text-gray-600'>QOF Health Check</h2>
        <p className='text-sm text-gray-500'>Population Prevalance</p>

        <Bar options={options} data={data} />
    </div>
  )
}

export default PopulanceCard