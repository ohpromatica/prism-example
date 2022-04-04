import React from "react";

type Props = {
  title: string;
  exerpt: string;
  patients: number;
  authorised: number;
  complete: number;
};

function DiagnosisCard({ title, exerpt, ...props }: Props) {
  return (
    <div className="flex flex-row justify-between w-3/4 mx-10 my-2 border border-gray-500 rounded-md shadow-2xl bg-slate-50">
      <h4 className="m-2 text-xl font-semibold">{title}</h4>
      <p className="m-2">{exerpt}</p>
      <div className="flex flex-col m-2 text-sm font-semibold">
        <p>{`${props.patients} Patients`}</p>
        <p>{`${props.authorised} Authorized`}</p>
        <p>{`${props.complete} Complete`}</p>
      </div>
    </div>
  );
}

export default DiagnosisCard;
