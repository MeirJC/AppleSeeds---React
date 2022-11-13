import logo from "./logo.svg";
import "./App.css";
import AnimateDiv from "./components/AnimateDiv";
import { useEffect, useState } from "react";

function App() {
  // const [favColor, setFavColor] = useState("purple");
  let isHidden = false;
  console.log(isHidden);
  useEffect(() => {
    setTimeout(() => {
      isHidden = true;
      console.log(isHidden);
    }, 5000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AnimateDiv className={`${isHidden && "hidden"}`} isHidden={isHidden} />
      </header>
    </div>
  );
}

export default App;
