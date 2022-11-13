import React from "react";
import { useEffect, useState } from "react";
//
function Heading({}) {
  const [myColor, setMyColor] = useState("blue");
  useEffect(() => {
    setTimeout(() => {
      setMyColor("crimson");
    }, 1500);
  }, []);
  return <h1>My Favorite Color is: {myColor}</h1>;
}

export default Heading;
