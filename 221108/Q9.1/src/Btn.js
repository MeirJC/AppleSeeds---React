import React from "react";

const Btn = ({ color, callBack, id }) => {
  return (
    <div>
      <button
        onClick={(e) => callBack(e.target.textContent)}
        style={{
          padding: "0.6rem 1rem",
          margin: "0.3rem",
          fontWeight: "600",
          fontSize: "1.35rem",
          background: color,
        }}
      >
        {color}
      </button>
    </div>
  );
};
export default Btn;
