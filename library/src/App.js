import logo from './logo.svg';
import './App.css' ;
import Navbar from './Navbar' ;
import Home from './Home' ;
import Contact from './Contact';
import About from './About';
import Signup from './SignUp';
import {BrowserRouter as Router , Route , Switch, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Signup" element={<Signup />} />


          </Routes>
      </div>
      
    </div>
    </Router>
  );
}

export default App;
