import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [taskArr, setTaskArr] = useState(
    JSON.parse(localStorage.getItem("taskArr"))
      ? JSON.parse(localStorage.getItem("taskArr"))
      : []
  );
  const [inputVal, setInputVal] = useState("");

  useEffect(() => {
    const dataToLS = JSON.stringify(taskArr);
    localStorage.setItem("taskArr", dataToLS);
  }, [taskArr]);

  const handleInput = ({ target: { value } }) => {
    setInputVal(value);
  };

  const handleAddTask = () => {
    // ↓↓ state is Async!
    // ↓↓  no so good practice
    // const tempState = [...taskArr, { value: inputVal, done: false }];
    setTaskArr((prev) => [...prev, { value: inputVal, done: false }]);
    setInputVal("");
  };

  const handleUpdate = (index) => {
    //?
    setTaskArr((prev) => {
      return prev.map((task, mapIndex) => {
        if (mapIndex !== index) {
          return task;
        } else {
          task.done = !task.done;
          return task;
        }
      });
    });
  };

  const handleDelete = (index) => {
    setTaskArr((prevState) =>
      prevState.filter((task, mapIndex) => {
        return mapIndex !== index;
      })
    );
  };
  return (
    <div>
      <div className="container">
        <h1>Tasks TO-DO</h1>
        <input value={inputVal} onChange={handleInput} />
        <button onClick={handleAddTask}>Add Task</button>
        {/* //? Read */}
        {taskArr.map((task, mapIndex) => (
          <div className="fullTask" key={task.value + mapIndex}>
            <h3
              className="taskItem"
              onClick={() => {
                handleUpdate(mapIndex);
              }}
            >
              <span className="checkBox taskItem">
                {task.done ? "V   " : "X   "}
              </span>
              <span className="taskText">{task.value}</span>
            </h3>
            <button
              className="checkButton taskItem"
              onClick={() => {
                handleDelete(mapIndex);
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
