import logo from "./logo.svg";
import "./App.css";
import FetchRandom from "./components/FetchRandom";
// import { useFetch } from "./useFetch";
function App() {
  // const { address } = useFetch("https://dog.ceo/api/breeds/image/random");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <FetchRandom />
        <FetchRandom />
      </header>
    </div>
  );
}

export default App;
