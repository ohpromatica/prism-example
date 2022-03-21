import React, { ReactElement } from 'react';
import Sidebar from '../../src/components/Sidebar/Sidebar';
import { Routes, Route } from 'react-router-dom';
import DiabetesPracticeOverview from '../pages/DiabetesPracticeOverview';
import DiabetesHbA1cAndBloodGlucose from '../pages/DiabetesHbA1cAndBloodGlucose';
import MedicationAndTestStripUser from '../pages/MedicationAndTestStripUser';
import DiabetesPracticeOtherMetric from '../pages/DiabetesPracticeOtherMetric';


type LayoutProps = {
  children: ReactElement;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
    <div className='h-12 text-xl bg-zinc-900 text-slate-50'>
      PRISM
      <p className='text-sm text-slate-50'>Healthcare Solutions</p>
    </div>
    <div className="flex flex-row h-full">
      <Sidebar />
      <div className="w-full h-screen">
        <div className="h-screen overflow-y-scroll">
        <Routes>
            <Route path="/" element={<div>Hello</div>} />
            <Route path="/dashboard" element={<DiabetesPracticeOverview />} />
            <Route path="/dashboard/diabetes" element={<DiabetesHbA1cAndBloodGlucose />} />
            <Route path="/dashboard/medications" element={<MedicationAndTestStripUser />} />
            <Route path="/dashboard/practice" element={<DiabetesPracticeOtherMetric />} />
        </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default Layout;