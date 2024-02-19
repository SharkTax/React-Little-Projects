import './App.css';
import Treeview from './components/side-bar';

function App() {
  return (
    <div className="App">
      <Treeview menus={menus}/>
    </div>
  );
}

export default App;

