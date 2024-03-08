import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Main from './Components/Main/Main';
import Companies from './Components/Companies/Companies';
import Properties from './Components/Properties/Properties';
import OurMarket from './Components/OurMarket/OurMarket';
import Contact from './Components/Contact/Contact';
import HowToStart from './Components/HowToStart/HowToStart';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className='white-gradient' />
        <NavBar />
        <Main />
      </div>
      <Companies />
      <Properties />
      <OurMarket />
      <Contact />
      <HowToStart />
      <Footer />
    </div>
  );
}

export default App;
