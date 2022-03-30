import React from "react";

type PillProps = {
  name: string;
};

export default function Pill({ name }: PillProps) {
  return (
    <div className="flex flex-row p-1 px-4 border rounded-2xl bg-zinc-300 border-zinc-500 w-fit">
      <span className="px-1">{name}</span>
    </div>
  );
}
