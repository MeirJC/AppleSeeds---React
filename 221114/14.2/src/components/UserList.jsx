import { useState, useEffect } from "react";
import axios from "axios";
import Container from "./Container";
//========================================================================
function UserList() {
  const [userList, setUserList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // ============================================================
  async function setTheList() {
    const { data } = await axios.get("https://randomuser.me/api/?results=100");
    console.log("data inside setList", data.results);
    setUserList(data.results);
  }

  return (
    <div style={{ width: "90vw" }}>
      <button onClick={setTheList}>Get FU@&ING users!</button>
      <br />
      <input
        type="text"
        name="searchIn"
        id="searchInput"
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <Container search={searchInput}>
        {userList &&
          userList.map((user, i) => {
            return (
              <div
                key={`${user.name.title} ${user.name.first} ${user.name.last} ${i}`}
                className="card"
              >
                <p>
                  {`${user.name.title} ${user.name.first} ${user.name.last}`}
                </p>
                <p>{`Age: ${user.dob.age}`}</p>
                <img alt="pic" src={user.picture.large}></img>
              </div>
            );
          })}
      </Container>
    </div>
  );
}
//========================================================================
export default UserList;
