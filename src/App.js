import './App.css';
import Accordian from './components/accordian';
import RandomColor from "./components/randomHex"
import StartRating from './components/star-rating';
import ImageSlider from './components/image-slider';

function App() {
  return (
    <div className="App">
      {/*Accordian component*/}
      <Accordian/>

      <RandomColor/>

      <StartRating noOfStars={10}/>

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
