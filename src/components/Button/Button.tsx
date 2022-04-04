import React from "react";

type ButtonProps = {
  text: string;
};

function Button({ text }: ButtonProps) {
  return (
    <button className="w-20 p-2 m-2 bg-gray-600 rounded-sm text-slate-50">
      {text}
    </button>
  );
}

export default Button;
