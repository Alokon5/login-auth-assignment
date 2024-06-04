import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { useState } from 'react';
import Login from './components/Login';
import Signup  from './components/Signup';
import { Route,Routes } from 'react-router-dom';

function App() { 
  


  return (
    <div className="App">
      <Header  />
     
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  );
}

export default App;
