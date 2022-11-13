import React from "react";
import logo from "./logo.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [joke, setJoke] = useState("");
  const [categories, setCategories] = useState([]);

  async function generateJoke() {
    const { data } = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(data);
    setJoke(data.value);
  }
  // generateJoke();

  useEffect(() => {
    async function getCategories() {
      const { data } = await axios.get(
        "https://api.chucknorris.io/jokes/categories"
      );
      console.log(data);
      setCategories(data);
    }
    getCategories();
  }, []);

  async function getJokeByCategory(e) {
    const category = e.target.getAttribute("id");
    const { data } = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${category}`
    );
    console.log(data);
    setJoke(data.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {categories.map((category, i) => (
            <li onClick={getJokeByCategory} key={i + category} id={category}>
              {category}
            </li>
          ))}
        </ul>
        <p>{joke}</p>
        <button onClick={generateJoke}>Get Joke</button>
      </header>
    </div>
  );
}

export default App;
