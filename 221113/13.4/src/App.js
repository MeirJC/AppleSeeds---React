import { React, useEffect, useState } from "react";
import Spinner from "./Components/Spinner.jsx";

function App() {
  const [time, setTime] = useState(false);

  useEffect(() => {
    setTime(true);
    setTimeout(() => {
      setTime(false);
    }, 5500);
  }, []);

  return (
    <div className="container">
      <div>{time && <Spinner />}</div>
    </div>
  );
}

export default App;
