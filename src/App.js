import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Counter from './Pages/Counter';
import Conditional from './Pages/Conditional';
import Ternary from './Pages/Ternary';
import Studentlist from './Pages/Studentlist';

function App() {
  return (
    <>
    <Header/>
    <Home name="Anjali Singh" age="23"/><br/>
    <Home title="We can pass more than 1 parameter"/>
    <Counter/>
    <About/>
    <Footer/>

    <Conditional/>
    <Ternary/>

    <Studentlist/>
    </>
  
  );
}

export default App;
