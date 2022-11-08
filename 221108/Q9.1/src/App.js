import React from "react";
import Btn from "./Btn";
import "./App.css";

const colorsArr = [
  { color: "red", id: 0 },
  { color: "green", id: 1 },
  { color: "blue", id: 2 },
  { color: "yellow", id: 3 },
];
const App = () => {
  const [currentColor, setSelectedColor] = React.useState("");
  const updateColor = (color) => {
    setSelectedColor(color);
  };
  return (
    <div>
      <h1>The color is: {currentColor}</h1>
      {colorsArr.map((btn) => {
        return (
          <Btn
            callBack={updateColor}
            id={btn.id}
            key={btn.id}
            color={btn.color}
          />
        );
      })}
    </div>
  );
};
export default App;
