import React from "react";

type ProgressBarProps = {
  percentage: number;
};

function ProgressBar({ percentage }: ProgressBarProps) {
  return (
    <div className="w-full">
      <div className="text-sm">{`${percentage}% Complete`}</div>
      <div className="h-4 bg-gray-300">
        <div
          style={{ width: `${percentage.toString()}%` }}
          className={`h-full bg-purple-500`}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
