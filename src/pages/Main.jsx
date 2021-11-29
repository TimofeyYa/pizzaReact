import React from "react";
import {Categor, Sort, PizzaBlock} from '../components';
import PropTypes from 'prop-types';


function Main(props){

  console.log(props)
    return(
        <div className="container">
        <div className="content__top">
          <Categor item={[
            "Все",
            "Мясные",
            "Веганские",
            "Гриль",
            "Острые",
            "Закрытые",
          ]}/>
         <Sort item={[{name:'популярности', type: 'popular'},
          {name:"цене", type:"price"},
          {name:"алфавиту", type:'alfavit'}]}/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {
            props.items[0] && props.items.map(obj =>  <PizzaBlock key={`pizza__${obj.id}`} {...obj} />)
          }
         
        </div>
      </div>
    )
}

Main.propTypes = {
  items: PropTypes.array.isRequired
}

Main.propTypes = {
  item: []
}

export default Main;