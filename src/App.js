import React from 'react';
import './App.css';
import './css/main.css';

import { Routes, Route } from 'react-router-dom';

import {Header} from './components';
import {Main,Cart} from "./pages";


function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((resp) => resp.json()).
    then((json)=>{
      setPizzas(json.pizzas);
      
    })
  }, [])

  console.log(pizzas);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Main items={pizzas}/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  
  )
}

export default App;
