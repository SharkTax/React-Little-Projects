import './App.css';
import Accordian from './components/accordian';
import RandomColor from "./components/randomHex"

function App() {
  return (
    <div className="App">
      {/*Accordian component*/}
      <Accordian/>

      <RandomColor/>
    </div>
  );
}

export default App;
