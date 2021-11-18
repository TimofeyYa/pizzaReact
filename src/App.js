import React from 'react';
import './App.css';
import './css/main.css';

import { Routes, Route } from 'react-router-dom';

import {Header} from './components';
import {Main,Cart} from "./pages";


function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  
  )
}

export default App;
