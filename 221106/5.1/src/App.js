// import logo from './logo.svg';
import './App.css';
import Buttons from './Components/buttons'

const buttons = {
  text: ["Important", "Not Important"],
  style: [
    { fontWeight: 'bold', fontSize: "1.5rem" },
    { fontWeight: 'normal', fontSize: "1.25rem" }
  ]
}


function App() {
  return (
    <div className="App">
      <Buttons text={buttons.text[0]} style={buttons.style[0]}></Buttons>
      <Buttons text={buttons.text[1]} style={buttons.style[1]}></Buttons>
    </div >

  );
}

export default App;

