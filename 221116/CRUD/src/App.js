import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import { useState } from "react";
// My api address:   https://6374b05d48dfab73a4e5c117.mockapi.io/:endpoint
import Card from "./components/Card";
function App() {
  const [usersData, setUsersData] = useState([]);
  // const [isEditable, setIsEditable] = useState(false);
  //
  async function getUsers() {
    const { data } = await axios.get(
      "https://6374b05d48dfab73a4e5c117.mockapi.io/FakeUsers"
    );
    console.log("data getUsers", data);
    setUsersData(data);
  }
  // getUsers();
  // const handleDoubleClick = (event) => {
  //   if (event.detail === 2) {
  //     setIsEditable((prev) => (prev === true ? false : true));
  //     console.log("isEditable", isEditable);
  //     console.log("double click", event);
  //     console.log("target", event.target.contentEditable);
  //     // event.target.contentEditable ? setIsEditable(false) : setIsEditable(true);
  //   }
  // };
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getUsers}>Get Users!</button>
        <img src={logo} className="App-logo" alt="logo" />
        <div className="cardsContainer">
          {usersData.map((user) => {
            return (
              <Card
                key={`${user.firstName}${user.id}`}
                // isEdit={isEditable}
                // doubleClick={handleDoubleClick}
                firstName={user.firstName}
                lastName={user.lastName}
                quote={user.quote}
                imgUrl={user.image}
                isActive={user.isActive}
              />
            );
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
