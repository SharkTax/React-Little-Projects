import './App.css';
import StartRating from './components/star-rating';

function App() {
  return (
    <div className="App">
      <StartRating noOfStars={10}/>
    </div>
  );
}

export default App;
