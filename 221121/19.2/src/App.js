import "./App.css";
import Nav from "./components/Nav";
import Homepage from "./components/Homepage";
import About from "./components/About";
import themeChange from "./utils/context";
import { useState } from "react";
import React from "react";
// ==================
function App() {
  const [isDay, setIsDay] = useState(true);
  return (
    <themeChange.Provider value={{ isDay, setIsDay }}>
      <div className="App">
        <Nav />
        {isDay ? <About /> : <Homepage />}
      </div>
    </themeChange.Provider>
  );
}

export default App;
