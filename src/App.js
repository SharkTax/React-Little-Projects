import './App.css';
import Accordian from './components/accordian';
import RandomColor from "./components/randomHex"
import StartRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      {/*Accordian component*/}
      <Accordian/>

      <RandomColor/>

      <StartRating noOfStars={10}/>
    </div>
  );
}

export default App;
