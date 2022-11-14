import React from "react";

export default function Container({ children, search }) {
  console.log("children", children);
  function filterRes(children) {
    return children.filter((child) => {
      return child.key.toLowerCase().includes(search.toLowerCase());
    });
  }
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(auto-fit, minmax(220px, 1fr))`,
        gap: `1rem`,
        marginBottom: "1rem",
      }}
    >
      {search ? filterRes(children) : children}
    </div>
  );
}
