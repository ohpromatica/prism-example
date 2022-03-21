import React from 'react'

function DiabetesPracticeOverview() {
  return (
    <div>
      Diabetes Practice Overview
      <div className='p-1 m-2 text-gray-500 border-t-8 border-gray-300 bg-slate-50' >
          <h2>Practice</h2>
          <ul>
              <li className='ml-5 text-xl font-semibold'>List Size: 7926</li>
              <li className='ml-5 text-xl font-semibold'>Register: 631</li>
              <li className='ml-5 text-xl font-semibold'>Prevalence: 7.9%</li>
          </ul>
      </div>

      <div className='p-1 m-2 text-gray-500 border-t-8 border-gray-300 bg-slate-50'>
          <h2>Non-diabetic hypergylcaemia QOF register</h2>
          <p className='ml-5 text-xl font-semibold'>498</p>
      </div>
      

      <div className='p-1 m-2 text-gray-500 border-t-8 border-gray-300 bg-slate-50'>
          <h2>With clinical indicators of diabetes (not on register)</h2>
          <p className='ml-5 text-xl font-semibold'>54</p>
      </div>

      <div className='p-1 m-2 text-gray-500 border-t-8 border-gray-300 bg-slate-50'>
          <h3>Diabetes QOF Register: 631</h3>
      </div>
    </div>
  )
}

export default DiabetesPracticeOverview