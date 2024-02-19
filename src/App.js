import './App.css';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-images';
import Treeview from './components/side-bar';
import menus from './components/side-bar/list-sidebra';

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
    </div>
  );
}

export default App;

