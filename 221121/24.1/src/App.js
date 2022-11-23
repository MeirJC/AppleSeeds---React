import logo from "./logo.svg";
import "./App.css";
import { useCalc } from "./useCalc";
import NumberCalc from "./components/NumberCalc";
// ------------------------------------------------------
function App() {
  // const { number, addOne, removeOne, double, divide } = useCalc(5);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <div onClick={addOne}>Add One: {number}</div>
        <div onClick={removeOne}>Remove One: {number}</div>
        <div onClick={double}>Double: {number}</div>
        <div onClick={divide}>Divide: {number}</div> */}
        <NumberCalc />
        <NumberCalc />
      </header>
    </div>
  );
}

export default App;

// function App() {
//   const { number, addOne, removeOne, double, divide } = useCalc(5);
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div onClick={addOne}>Add One: {number}</div>
//         <div onClick={removeOne}>Remove One: {number}</div>
//         <div onClick={double}>Double: {number}</div>
//         <div onClick={divide}>Divide: {number}</div>
//       </header>
//     </div>
//   );
