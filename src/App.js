import './App.css';
import Accordian from './components/accordian';
import RandomColor from "./components/randomHex"
import StartRating from './components/star-rating';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-images';
import Treeview from './components/side-bar';
import menus from './components/side-bar/list-sidebra';
import QRCodeGenerator from './components/qr-code-generator';

function App() {
  return (
    <div className="App">

      <Accordian/>

      <RandomColor/>

      <StartRating noOfStars={10}/>

      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />

      <LoadMoreData/> 
      <Treeview menus={menus}/>

      <QRCodeGenerator/>
    </div>
  );
}

export default App;

