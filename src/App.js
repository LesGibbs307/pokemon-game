import Home from './App/Components/Home/Home';
import Game from './App/Components/Game/Game';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  return (
    <div className="App">
        <Home gameOver={false} />        
    </div>
  );
}

export default App;
