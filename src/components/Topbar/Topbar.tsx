import React from "react";

type Props = {
  user: string;
  practice: string;
};

function Topbar({ practice, user }: Props) {
  return (
    <div className="flex flex-row justify-between h-12 px-2 text-xl border border-slate-50 bg-zinc-900 text-slate-50">
      <div className="flex flex-row items-center">
        <div className="mr-4">
          PRISM
          <p className="text-sm text-slate-50">Healthcare Solutions</p>
        </div>
        <h1 className="uppercase">{practice}</h1>
      </div>
      <div className="flex flex-row items-center justify-center">
        {user}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
}

export default Topbar;
