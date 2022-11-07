import React, { useState } from "react";

function ButtonCounter(props) {
  let [counter, setCounter] = useState(props.number);
  const clickHandler = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <button onClick={clickHandler}>{props.btnText}</button>
      <h2>{counter}</h2>
    </div>
  );
}

export default ButtonCounter;
