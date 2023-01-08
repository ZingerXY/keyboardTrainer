import './App.scss';
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';
import Router from './routes/Router';

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
