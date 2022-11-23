import React, { useContext } from "react";
import "./Nav.css";
import themeChange from "../utils/context";
function Nav() {
  const context = useContext(themeChange);
  return (
    <div className="nav">
      <ul className={context.isDay ? "" : "navNight"}>
        <li>Home</li>
        <li>About</li>
        <button
          className={context.isDay ? "" : "navNight"}
          onClick={() => {
            context.setIsDay((prev) => !prev);
          }}
        >
          {context.isDay ? "Dark Mode" : "Day Mode"}
        </button>
      </ul>
    </div>
  );
}

export default Nav;
