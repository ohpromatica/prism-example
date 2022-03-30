import React, { useState } from "react";

type IPill = {
  name: string;
};

function DropdownPill({ name }: IPill) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div
      className="flex flex-row p-1 px-4 border cursor-pointer rounded-2xl bg-zinc-300 border-zinc-500 w-fit"
      onClick={() => setDropdown(!dropdown)}
    >
      <span className="px-1">{name}</span>

      {dropdown ? (
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
            d="M5 15l7-7 7 7"
          />
        </svg>
      ) : (
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
      )}
    </div>
  );
}

export default DropdownPill;
