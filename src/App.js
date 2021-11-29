import React from 'react';
import './App.css';
import './css/main.css';

import { Routes, Route } from 'react-router-dom';

import {Header} from './components';
import {Main,Cart} from "./pages";

import { setPizzas } from './redux/actions/pizzas';
import store from './redux/store'
import {connect} from 'react-redux'

store.subscribe(()=> console.log(store.getState()));

function App(props) {


  React.useEffect(() => {
    fetch('http://localhost:3000/db.json').then((resp) => resp.json()).
    then((json)=>{
      store.dispatch(setPizzas(json.pizzas));
      
    })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Main items={props.items}/>}/>
          <Route exact path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </div>
  
  )
}

const mapStateToProps = (state) =>{
  return {
    items: state.pizzasRed.items
  }
}

export default connect(mapStateToProps)(App);
