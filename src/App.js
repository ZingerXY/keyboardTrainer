import './App.scss';
import Header from "./components/Header/Header";
import RunningString from './components/RunningString/RunningString';
import Keyboard from './components/Keyboard/Keyboard';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='Main-part'>
        <RunningString />
        <Keyboard />
      </main>
      
    </div>
  );
}

export default App;
