import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const myRef = React.useRef("");
  React.useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <label htmlFor="input1">TextBox1</label>
        <input type="text" name="" ref={myRef} id="input1" />
        <label htmlFor="input1">TextBox2</label>
        <input type="text" name="" ref={myRef} id="input2" />
      </header>
    </div>
  );
}

export default App;
