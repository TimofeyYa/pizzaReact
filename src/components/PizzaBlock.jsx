

import React from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

function PizzaBlock(props){
    const [sizePizza, setSizePizza] = React.useState(0);
    const [activeTypes, setActiveTypes] = React.useState(props.types[0]);

    function setPizzaFunc(index){
      setSizePizza(index);
    }
    console.log(props.types.includes(1));
    return(
        <div className="pizza-block">
        <img
          className="pizza-block__image"
          src={props.imageUrl}
          alt="Pizza"
        />
        <h4 className="pizza-block__title">{props.name}</h4>
        <div className="pizza-block__selector">
          <ul>
            <li onClick={()=> setActiveTypes(0)} className={`${activeTypes === 0 ? 'active' : ''} ${!props.types.includes(0) ? 'disablePizza' : ''}`} >тонкое</li>
            <li onClick={()=> setActiveTypes(1)} className={`${activeTypes === 1 ? 'active' : ''} ${!props.types.includes(1) ? 'disablePizza' : ''}`} >традиционное</li>
          </ul>
          <ul>
            {props.sizes &&
              props.sizes.map((item, index) => <li 
               key={`pizzaSize__${index}`}
               className={index === sizePizza ? 'active' : ''}
               onClick = {() => setSizePizza(index)}>{item} см</li>)
            }
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {props.price} ₽</div>
          <div className="button button--outline button--add">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Добавить</span>
            <i>2</i>
          </div>
        </div>
        </div>
    )
}

PizzaBlock.propTypes ={
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
  types:PropTypes.array.isRequired
}


PizzaBlock.defaultProps = {
  sizes: [1,2,3]
}


export default PizzaBlock;