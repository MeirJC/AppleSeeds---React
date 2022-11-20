import "./App.css";
import { Component } from "react";
// ============================================================
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: [
        { name: "CSS", completed: true },
        { name: "JavaScript", completed: true },
        { name: "Learn React", completed: false },
        { name: "Learn mongoDB", completed: false },
        { name: "Learn Node JS", completed: false },
      ],
    };
  }
  // ====================================
  taskStatus(task) {
    const temp = this.state.todoList[task];
    this.setState((prev) => {
      return [
        (prev.todoList[task] = {
          ...temp,
          completed: !temp.completed,
        }),
      ];
    });
  }

  // ====================================

  // taskStatus(task) {
  //   // console.log("RETURN", task);
  //   this.setState(
  //     (prevState) => {
  //       return (
  //         prevState.todoList[task].completed ? false : true,
  //         console.log("this.todoList", prevState.todoList[task].completed)
  //       );
  //     },
  //     () => {
  //       // console.log("RETURN", task);
  //     }
  //   );
  // }
  render() {
    const myTable = this.state.todoList.map((item, index) => {
      return (
        <h3
          key={`${item.name}${item.index}`}
          onClick={() => this.taskStatus(index)}
        >
          {item.name}
          <span>
            &nbsp;&nbsp;&nbsp;
            {item.completed ? (
              <span
                style={{ color: "green" }}
                className="material-symbols-outlined"
              >
                done
              </span>
            ) : (
              <span
                style={{ color: "crimson" }}
                className="material-symbols-outlined"
              >
                close
              </span>
            )}
          </span>
        </h3>
      );
    });

    // console.log(this.state.todoList);
    return <div className="App-header">{myTable}</div>;
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />

//       </header>
//     </div>
//   );
// }

export default App;
