import logo from './logo.svg';
import './index.css';
import NavBar from './components/Navbar'
import "bootstrap/dist/css/bootstrap.css"
import HomePage from './pages/HomePage';
import { Component } from 'react';
import {Route,Routes} from 'react-router-dom'
import Packages from './pages/Packages';
import JoinUs from './pages/JoinUs';
import About from './pages/About'
import Rooms from './pages/Rooms'
import ChatPage from './pages/ChatPage';




function App() {
  
  return (
    <div className="App">
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Packages" element={<Packages/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Rooms' element={<Rooms/>}/>
          <Route path='/JoinUs' element={<JoinUs/>}/>
          <Route path='/Chat' element={<ChatPage/>}/>
        </Routes>
    </div>
  );
}

export default App;
