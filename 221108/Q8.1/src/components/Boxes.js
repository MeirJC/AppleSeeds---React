import React from "react";
import "./Boxes.css";
import { Green, Blue, Pink, Purple } from "./StyledDiv";

function Boxes() {
  // Solution 1 - With Classes
  // return (
  //   <div className="green">
  //     <div className="blue">
  //       <div className="pink">
  //         <div className="purple"></div>
  //         <div className="purple"></div>
  //       </div>
  //     </div>
  //   </div>
  // ++==--==++==--==++==--==++==--==++==--==++==--==++==--==++
  // Solution 2 - With Styles
  // return (
  //   <div
  //     style={{
  //       width: "80vh",
  //       height: "60vh",
  //       backgroundColor: "#8ac926",
  //       margin: "5vh auto",
  //       display: "flex",
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  //   >
  //     <div
  //       style={{
  //         width: "70vh",
  //         height: "50vh",
  //         margin: "5vh auto",
  //         display: "flex",
  //         justifyContent: "center",
  //         alignItems: "center",
  //         backgroundColor: "#118ab2",
  //       }}
  //     >
  //       <div
  //         style={{
  //           width: "60vh",
  //           height: "40vh",
  //           margin: "5vh auto",
  //           display: "flex",
  //           justifyContent: "space-around",
  //           alignItems: "center",
  //           backgroundColor: "#ff99c8",
  //           flexDirection: "column",
  //         }}
  //       >
  //         <div
  //           style={{
  //             width: "50vh",
  //             height: "15vh",
  //             margin: "2.5vh auto 2.5vh",
  //             backgroundColor: "#8338ec",
  //           }}
  //         ></div>
  //         <div
  //           style={{
  //             width: "50vh",
  //             height: "15vh",
  //             margin: "2.5vh auto 2.5vh",
  //             backgroundColor: "#8338ec",
  //           }}
  //         ></div>
  //       </div>
  //     </div>
  //   </div>
  // );
  // ++==--==++==--==++==--==++==--==++==--==++==--==++==--==++
  // Solution 3 - With Styled Components
  return (
    <Green className="green">
      <Blue className="blue">
        <Pink className="pink">
          <Purple className="purple"></Purple>
          <Purple className="purple"></Purple>
        </Pink>
      </Blue>
    </Green>
  );
}

export default Boxes;
