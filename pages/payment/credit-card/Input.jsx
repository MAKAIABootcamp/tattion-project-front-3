import React from "react";

const Input = ({ label, value, cb, id }) => {
  return (
    <div className="w-full mb-4">
      <label htmlFor={id} className="text-sm text-left w-full text-slate-400 pb-2">
        {label}
      </label>
      <input
        id={id}
        value={value}
        onChange={(e) => cb(e.target.value)}
        type="text"
        className="w-full p-3 rounded-sm border bg-[#2b2c2c] text-white border-slate-500 focus:outline-none focus:shadow-lg transition-shadow focus:border-gray-300 hover:border-gray-300"
      />
    </div>
  );
};

export default Input;
