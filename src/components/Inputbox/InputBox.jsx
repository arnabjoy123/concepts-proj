import React from "react";

function InputBox({ label }) {
  return (
    <>
      <div>
        <label>{label}</label>
        <input className="border" type="number" />
        <label>Currency type</label>
        <select></select>
      </div>
    </>
  );
}

export default InputBox;
