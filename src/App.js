import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <>
    <Header/>
    <Home name="Anjali Singh" age="23"/>
    <Home title="We can pass more than 1 parameter"/>
    <About/>
    <Footer/>
    </>
  
  );
}

export default App;
