import './App.css';

import RandomColor from './components/random-color';
import Accordian from './components/accordian';


function App() {
  return (
    <div className="App">
      {/*Accordian component*/}
      <Accordian/>
      {/*Random hex color*/}
      <RandomColor/>

    </div>
  );
}

export default App;
