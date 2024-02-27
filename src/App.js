import './App.css';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-images';
import Treeview from './components/side-bar';
import menus from './components/side-bar/list-sidebra';
import QRCodeGenerator from './components/qr-code-generator';
import LightDarkMode from './components/light-dark-mode';
import ScrollIndicator from './components/scroll-indicator';
import TabTest from './components/custom-tabs/tab-test';
import ModalTest from './components/custom-model-popup/modal';
import GitHubProfileFinder from './components/github-profile-finder';

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

      <LightDarkMode/>

      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"}/>

      <TabTest/>

      <ModalTest/>

      <GitHubProfileFinder/>
    </div>
  );
}

export default App;

