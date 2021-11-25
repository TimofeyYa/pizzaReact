import React from "react";
import {Categor, Sort, PizzaBlock} from '../components';
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
         <Sort item={['популярности', "цене", "алфавиту"]}/>
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

export default Main;