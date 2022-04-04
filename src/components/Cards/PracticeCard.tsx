import React from "react";
import { Link } from "react-router-dom";

interface IPracticeCardProps {
  practiceName: string;
  patients: number;
  earnings?: string;
  exerpt: string;
}

function PracticeCard({
  practiceName,
  patients,
  earnings,
  exerpt,
}: IPracticeCardProps) {
  return (
    <Link to={"/dashboard/qof-health-check"}>
      <div className="flex flex-col p-2 m-4 border-4 border-gray-800 bg-slate-50 rounded-xl w-96 h-96">
        <h3 className="pb-2 mx-10 my-3 font-semibold text-center text-purple-500 border-b border-purple-500">
          {practiceName.toUpperCase()}
        </h3>
        <h1 className="m-2 text-2xl font-semibold text-center text-purple-500">{`${patients} Patients`}</h1>
        {earnings ? (
          <h6 className="font-semibold text-center">{`£${earnings} earnings`}</h6>
        ) : null}
        <p className="m-2 text-center">{exerpt}</p>
      </div>
    </Link>
  );
}

export default PracticeCard;
