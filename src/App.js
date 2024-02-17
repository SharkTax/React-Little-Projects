import './App.css';
import Accordian from './components/accordian';
import RandomColor from "./components/randomHex"
import StartRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-images';

function App() {
  return (
    <div className="App">
      <LoadMoreData/>
    </div>
  );
}

export default App;
