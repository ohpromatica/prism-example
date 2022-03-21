import React from 'react'

type Props = {
    title: string;
    exerpt: string;
    patients: number;
    authorised: number;
    complete: number
}

function DiagnosisCard({title, exerpt, ...props }: Props) {
  return (
    <div className='flex flex-row w-3/4 mx-10 my-2 rounded-md shadow-xl bg-slate-50'>
        <h4>{title}</h4>
        <p>{exerpt}</p>
        <div className='flex flex-col'>
            {`${props.patients} Patients`}
            {`${props.authorised} Authorized`}
            {`${props.complete} Complete`}

        </div>
    </div>
  )
}

export default DiagnosisCard