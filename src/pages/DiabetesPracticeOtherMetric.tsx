import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['None', 'Mild', 'Moderate', 'Severe'],
    datasets: [
      {
        label: '# of Votes',
        data: [321, 158, 114, 38],
        backgroundColor: [
          'rgba(54, 162, 235)',
          'rgba(255, 159, 64, 1)',
          'rgba(100, 100, 100)',
          'rgba(255, 206, 86)',
        ],
        borderColor: [
          'white',
          'white',
          'white',
          'white',
        ],
        borderWidth: 3,
      },
    ],
  };

function DiabetesPracticeOtherMetric() {
  return (
    <div>
        Diabetes Practice - other metrics

      <div className='p-1 m-1 border-t-8 border-gray-300 bg-slate-50'>
        <h4 className='my-2 text-sm text-gray-500'>Frailty and number of co-morbidities with Diabetes</h4>
        <table className='border border-gray-500'>
          <thead>
            <tr>
              <th className='p-1 border-l border-gray-500'>Comorbidities</th>
              <th className='p-1 border-l border-gray-500 '>None</th>
              <th className='p-1 border-l border-gray-500 '>Mild</th>
              <th className='p-1 border-l border-gray-500'>Moderate</th>
              <th className='p-1 border-l border-gray-500'>Severe</th>
            </tr>
          </thead>
          <tbody>
            <tr className='text-right border border-gray-500'>
                <td className='border-l border-gray-500'>0</td>
                <td className='border-l border-gray-500'>285</td>
                <td className='border-l border-gray-500'>124</td>
                <td className='border-l border-gray-500'>59</td>
                <td className='border-l border-gray-500'>10</td>
            </tr>
            <tr className='text-right border border-gray-500'>
                <td className='border-l border-gray-500'>1</td>
                <td className='border-l border-gray-500'>30</td>
                <td className='border-l border-gray-500'>25</td>
                <td className='border-l border-gray-500'>30</td>
                <td className='border-l border-gray-500'>8</td>
            </tr>
            <tr className='text-right border border-gray-500'>
                <td className='border-l border-gray-500'>2</td>
                <td className='border-l border-gray-500'>4</td>
                <td className='border-l border-gray-500'>7</td>
                <td className='border-l border-gray-500'>20</td>
                <td className='border-l border-gray-500'>11</td>
            </tr>
            <tr className='text-right border border-gray-500'>
                <td className='border-l border-gray-500'>3</td>
                <td className='border-l border-gray-500'>2</td>
                <td className='border-l border-gray-500'>2</td>
                <td className='border-l border-gray-500'>5</td>
                <td className='border-l border-gray-500'>9</td>
            </tr>
            <tr className='text-right border border-gray-500'>
                <td className='text-left'>Total</td>
                <td className='border-l border-gray-500'>321</td>
                <td className='border-l border-gray-500'>158</td>
                <td className='border-l border-gray-500'>114</td>
                <td className='border-l border-gray-500'>38</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='p-1 m-1 border-t-8 border-gray-300 bg-slate-50'>
        <h4 className='my-2 text-sm text-gray-500'>Housebound or in care home</h4>
        106 (6.8%)
      </div>

      <div className='p-1 m-6 border-t-8 border-gray-300 bg-slate-50'>
        <h4 className='my-2 text-sm text-gray-500'>Frailty in register</h4>
        <Pie data={data} />
      </div>

    </div>
  )
}

export default DiabetesPracticeOtherMetric