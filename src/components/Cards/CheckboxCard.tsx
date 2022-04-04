import React, { ReactNode, useState } from "react";

type CheckboxCardProps = {
  title: string;
  exerpt: string;
  children: ReactNode;
  selected: boolean;
};

function CheckboxCard({
  title,
  exerpt,
  children,
  selected,
}: CheckboxCardProps) {
  const [checked, setChecked] = useState(false);

  const onChangeHandler = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex flex-row items-center">
      <input
        type="radio"
        value={title}
        name={title}
        className="rounded-full"
        onChange={onChangeHandler}
      />
      <div
        className={
          (checked ? "border-2 border-gray-900 " : "border-gray-500 ") +
          "flex flex-row justify-between w-3/4 m-2 my-2 border rounded-md shadow-2xl bg-slate-50"
        }
      >
        <h4 className="m-2 text-xl font-semibold">{title}</h4>
        <p className="m-2">{exerpt}</p>
        <div className="flex flex-col m-2 text-sm font-semibold">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CheckboxCard;
