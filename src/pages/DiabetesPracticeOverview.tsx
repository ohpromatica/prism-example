import React from "react";
import { Breadcrumbs } from "../components/Breadcrumb/Breadcrumb";
import CheckboxCard from "../components/Cards/CheckboxCard";
import DiagnosisCard from "../components/Cards/DiagnosisCard";
import DropdownPill from "../components/DropdownPill/DropdownPill";
import Pill from "../components/Pill/Pill";
import Table from "../components/Table/Table";
import PracticeCard from "../components/Cards/PracticeCard";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Button from "../components/Button/Button";
import TaskCard from "../components/Cards/TaskCard";

const items = [
  { title: "Link", href: "#" },
  { title: "Link two", href: "#" },
  { title: "Link three", href: "#" },
].map((item, index) => (
  <a href={item.href} key={index}>
    {item.title}
  </a>
));

const columns = ["ID", "Firstname", "Lastname", "Age"];

const rows = [
  { id: 1, firstname: "Joe", lastname: "Bloggs", age: 18 },
  { id: 1, firstname: "Joe", lastname: "Bloggs", age: 18 },
  { id: 1, firstname: "Joe", lastname: "Bloggs", age: 18 },
  { id: 1, firstname: "Joe", lastname: "Bloggs", age: 18 },
];

function DiabetesPracticeOverview() {
  return (
    <div>
      Diabetes Practice Overview
      <div className="p-1 m-2 text-gray-500 border-t-8 border-gray-300 bg-slate-50">
        <h2>Practice</h2>
        <ul>
          <li className="ml-5 text-xl font-semibold">List Size: 7926</li>
          <li className="ml-5 text-xl font-semibold">Register: 631</li>
          <li className="ml-5 text-xl font-semibold">Prevalence: 7.9%</li>
        </ul>
      </div>
      <div className="p-1 m-2 text-gray-500 border-t-8 border-gray-300 bg-slate-50">
        <h2>Non-diabetic hypergylcaemia QOF register</h2>
        <p className="ml-5 text-xl font-semibold">498</p>
      </div>
      <div className="p-1 m-2 text-gray-500 border-t-8 border-gray-300 bg-slate-50">
        <h2>With clinical indicators of diabetes (not on register)</h2>
        <p className="ml-5 text-xl font-semibold">54</p>
      </div>
      <div className="p-1 m-2 text-gray-500 border-t-8 border-gray-300 bg-slate-50">
        <h3>Diabetes QOF Register: 631</h3>
      </div>
      <DropdownPill name="Test" />
      <Pill name="Test" />
      <Breadcrumbs separator="/">{items}</Breadcrumbs>
      <Table tableTitle="Patient List" columns={columns} rows={rows} />
      <DiagnosisCard
        title={"Test"}
        exerpt={"blah blah blah"}
        patients={0}
        authorised={0}
        complete={0}
      />
      <CheckboxCard
        title={"Test"}
        exerpt={"blah blah blah"}
        children={undefined}
        selected={true}
      />
      <PracticeCard practiceName={""} patients={0} exerpt={""} />
      <ProgressBar percentage={60} />
      <Button text="Test" />
      <TaskCard
        surgery={"Riverside Surgery"}
        category={"QOF Health Check"}
        authorised={8}
        patients={"10 Patients"}
        status={"Complete"}
      />
    </div>
  );
}

export default DiabetesPracticeOverview;
