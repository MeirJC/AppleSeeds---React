import React, { useState } from "react";
import "./Checkbox.css";

const Chekbox = ({ checked, label }) => {
  const [state, setState] = useState(checked);
  const clickhandler = () => {
    setState(!state);
  };
  return (
    <div>
      <input
        className="boxes"
        onChange={clickhandler}
        type="checkbox"
        checked={state}
      />
      <label>{label}</label>
    </div>
  );
};

export default Chekbox;
