import React, { useState } from "react";
import "./App.css";

function App() {
  let start = 0;
  let [toggle, setToggle] = useState(start);
  const clickHandler = () => {
    setToggle((prevState) => (prevState < 10 ? prevState + 1 : prevState));
  };
  const clickHandler1 = () => {
    setToggle((prevState) => (prevState > -10 ? prevState - 1 : prevState));
  };

  return (
    <div className="App">
      <button onClick={clickHandler}>Increase</button>
      <button onClick={clickHandler1}>Decrease</button>
      <label className={toggle < 0 ? "red" : toggle === 0 ? "black" : "green"}>
        {toggle}
      </label>
    </div>
  );
}

export default App;
