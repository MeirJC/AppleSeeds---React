import React from "react";
import { useCalc } from "../useCalc";
function NumberCalc() {
  const { number, addOne, removeOne, double, divide, invertSign } = useCalc(0);
  return (
    <div>
      NumberCalc
      <ul className="numContainer">
        <li onClick={addOne}>Add One</li>
        <li onClick={removeOne}>Remove One </li>
        <li onClick={double}>Double </li>
        <li onClick={divide}>Divide </li>
        <li onClick={invertSign}>Invert Sign </li>
        <li>{number}</li>
      </ul>
    </div>
  );
}

export default NumberCalc;
