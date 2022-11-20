// import React, { useState } from "react";
import "./App.css";
import { Component } from "react";
// ====================================================
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 0,
    };
  }
  // state = { toggle: 0 };

  clickHandler1 = () => {
    this.setState(
      (prevState) => {
        return {
          toggle:
            prevState.toggle < 10 ? prevState.toggle + 1 : prevState.toggle,
        };
      },
      () => {
        // return this.state.toggle;
      }
    );
    //this.setToggle((prevState) => (prevState < 10 ? prevState + 1 : prevState));
  };
  clickHandler2 = () => {
    // this.setToggle((prevState) =>
    //   prevState > -10 ? prevState - 1 : prevState
    // );
    this.setState(
      (prevState) => {
        return {
          toggle:
            prevState.toggle > -10 ? prevState.toggle - 1 : prevState.toggle,
        };
      },
      () => {
        // return this.state.toggle;
      }
    );
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.clickHandler1}>Increase</button>
        <button onClick={this.clickHandler2}>Decrease</button>
        <label
          className={
            this.state.toggle < 0
              ? "red"
              : this.state.toggle === 0
              ? "black"
              : "green"
          }
        >
          {this.state.toggle}
        </label>
      </div>
    );
  }
}

// function App() {
//   let start = 0;
//   let [toggle, setToggle] = useState(start);
//   const clickHandler1 = () => {
//     setToggle((prevState) => (prevState < 10 ? prevState + 1 : prevState));
//   };
//   const clickHandler2 = () => {
//     setToggle((prevState) => (prevState > -10 ? prevState - 1 : prevState));
//   };

//   return (
//     <div className="App">
//       <button onClick={clickHandler1}>Increase</button>
//       <button onClick={clickHandler2}>Decrease</button>
//       <label className={toggle < 0 ? "red" : toggle === 0 ? "black" : "green"}>
//         {toggle}
//       </label>
//     </div>
//   );
// }

export default App;
