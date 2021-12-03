import React from 'react';
import './App.css';
import './css/main.css';

import { Routes, Route } from 'react-router-dom';

import {Header} from './components';
import {Main,Cart} from "./pages";

import { setPizzas, setLoad } from './redux/actions/pizzas';
import store from './redux/store'
import {useDispatch, useSelector} from 'react-redux'

store.subscribe(()=> console.log(store.getState()));

function App() {

  const dispatch = useDispatch();
  const storeSelector = useSelector(({filterRed, pizzasRed}) => {
    return{
      sortBy:filterRed.sortBy,
      category: filterRed.category
    };
  });

  console.log("Sort - ", storeSelector.category);
  React.useEffect(() => {
    dispatch(setLoad(true));
    let url = `http://localhost:3001/pizzas?category=${storeSelector.category}&_sort=${storeSelector.sortBy}`;
        if(storeSelector.category == 0) url = `http://localhost:3001/pizzas?_sort=${storeSelector.sortBy}`;
    fetch(url).then((resp) => resp.json()).
    then((json)=>{
      dispatch(setPizzas(json));
      dispatch(setLoad(false));
    })
  }, [storeSelector.category, storeSelector.sortBy])

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
