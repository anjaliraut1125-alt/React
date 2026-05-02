
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Counter from './Pages/Counter';
import Conditional from './Pages/Conditional';
import Ternary from './Pages/Ternary';
import Studentlist from './Pages/Studentlist';
import Hooks from './Pages/Hooks';
// import { MyContext } from './Pages/MyContext.';
// import Child from './Pages/Child';
import Api from './Pages/Api';
import ControlledForm from './Pages/ControlledForm';
import Uncontrolled from './Pages/Uncontrolled';
import FormHandling from './Pages/FormHandling';
import Login from './Pages/Login';
import Register from './Pages/Register';

import {BrowserRouter,Routes,Route} from "react-router-dom";


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


    <Hooks/>



    {/* <MyContext.Provider value="Anjali">
      <Child/>
    </MyContext.Provider> */}



    <Api/>

    

    <ControlledForm/>

    <Uncontrolled/>
    <br/>


    <FormHandling/>
    <br/>


    <Login/>


    <Register/>

    <BrowserRouter>
    <Routes>
      <Route path= '/' element={<Home name="anjali" age="23" title="Routing Learn"/>}  />
      <Route path= '/Register' element={<Register/>}  />

    </Routes>
    </BrowserRouter>
    </>


    
    
  
  );
}

export default App;
