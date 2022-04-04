import React, { ReactElement } from "react";
import Sidebar from "../../src/components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import DiabetesPracticeOverview from "../pages/DiabetesPracticeOverview";
import DiabetesHbA1cAndBloodGlucose from "../pages/DiabetesHbA1cAndBloodGlucose";
import MedicationAndTestStripUser from "../pages/MedicationAndTestStripUser";
import DiabetesPracticeOtherMetric from "../pages/DiabetesPracticeOtherMetric";
import Topbar from "../components/Topbar/Topbar";

type LayoutProps = {
  children: ReactElement;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Topbar practice="example practice" user="Jamie Downie"></Topbar>
      <div className="flex flex-row h-full">
        <Sidebar />
        <div className="w-full h-screen">
          <div className="h-screen overflow-y-scroll">
            <Routes>
              <Route path="/" element={<div>Test</div>} />
              <Route path="/dashboard" element={<DiabetesPracticeOverview />} />
              <Route
                path="/dashboard/diabetes"
                element={<DiabetesHbA1cAndBloodGlucose />}
              />
              <Route
                path="/dashboard/medications"
                element={<MedicationAndTestStripUser />}
              />
              <Route
                path="/dashboard/practice"
                element={<DiabetesPracticeOtherMetric />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
