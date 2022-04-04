import React from "react";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";

type CardProps = {
  surgery: string;
  category: string;
  authorised: number;
  patients: string;
  status: string;
};

function TaskCard({
  surgery,
  category,
  authorised,
  patients,
  status,
}: CardProps) {
  return (
    <div className="m-2 bg-gray-100 border rounded-t-xl w-96">
      <div className="flex items-center justify-center p-4 bg-gray-300 rounded-t-xl">
        10:00am Today
      </div>
      <div className="flex flex-col w-full bg-slate-50">
        <h3 className="p-2 text-xl font-semibold">{surgery}</h3>
        <div className="flex flex-row justify-between px-2">
          <p className="font-semibold">{category}</p>
          {authorised === 0 ? (
            { patients }
          ) : (
            <div className="flex flex-col justify-between">
              <p>{patients} </p>
              <p className="text-red-500">{`${authorised} Unauthorised`}</p>
            </div>
          )}
        </div>
        <div className="p-2">Status: {status}</div>
        <div className="p-2">
          <ProgressBar percentage={50} />
          <Button text="Select" />
        </div>
      </div>
    </div>
  );
}

export default TaskCard;
