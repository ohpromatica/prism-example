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
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const medicationOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Medication split Type 2 Diabeties (% prescribed 2021)',
      },
    },
  };
  
const medicationLabels = ['Insulin', 'Sulphonyfureas', 'DPP-4 inhibiton', 'Metformin', 'GLP-1 agonists', 'SGLT-2 inhibitors'];

export const medicationData = {
    labels: medicationLabels,
    datasets: [
        {
            label: '%',
            data: [19, 35, 45, 77, 0, 0],
            backgroundColor: 'rgba(100, 100, 100, 0.5)',
        }
    ]
}

export const useOptions = {
    indexAxis: 'y' as const,
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: 'right' as const,
      },
      title: {
        display: true,
        text: 'BGTS and Flash use',
      },
    },
  };

const labels = ['Contour', 'OneTouch', 'Nexus', 'Other test strips', 'Flash', 'Flast + test strip'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [35, 28, 16, 11, 6, 4],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      stack: '2'
    },
    {
      label: 'Dataset 2',
      data: [100, 100, 100, 100, 100, 100],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      stack: '2'
    },
  ],
};


function MedicationAndTestStripUser() {
  return (
    <div>
      MedicationAndTestStripUser
    
      <div className='p-1 m-2 text-gray-500 border-t-8 border-gray-300 bg-slate-50'>
          Medication split
          <Bar options={medicationOptions} data={medicationData} />
      </div>

      <div className='p-1 m-2 text-gray-500 border-t-8 border-gray-300 bg-slate-50'>
          BGTS and Flash use
          <Bar options={useOptions} data={data} />
      </div>
    </div>
  )
}

export default MedicationAndTestStripUser