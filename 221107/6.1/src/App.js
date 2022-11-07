// import logo from './logo.svg';
import "./App.css";
import ButtonCounter from "./components/Button";

const data = { btnText: "incrament", number: 0 };
function App() {
  return (
    <div className="App">
      <ButtonCounter
        btnText={data.btnText}
        number={data.number}
      ></ButtonCounter>
    </div>
  );
}

export default App;
