import './App.scss';
import Header from "./components/Header/Header";
import RunningString from './components/RunningString/RunningString';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='Main-part'>
        <RunningString />
      </main>
      
    </div>
  );
}

export default App;
