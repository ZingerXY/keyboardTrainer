import './App.scss';
import Header from "./components/Header/Header";
import RunningString from './components/RunningString/RunningString';
import Keyboard from './components/Keyboard/Keyboard';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='Main-part'>
        <RunningString />
        <Keyboard />
      </main>
      <Footer />
    </div>
  );
}

export default App;
