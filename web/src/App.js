import logo from './logo.svg';
import './App.css';
import HLSPlayer from './components/Player';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Player hls</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <main>
        <HLSPlayer />
      </main>
    </div>
  );
}

export default App;
