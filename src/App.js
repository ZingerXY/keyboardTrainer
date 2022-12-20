import './App.scss';
import Header from "./components/Header/Header";
import RunningString from './components/RunningString/RunningString';
import Keyboard from './components/Keyboard/Keyboard';
import Footer from './components/Footer/Footer';
import Router from './components/Router/Router';

function App() {
  return (
    <div className="App">
      <Header />
      <main className='Main-part'>
        <Router />
      </main>
      <Footer />
    </div>
  );
}

export default App;
