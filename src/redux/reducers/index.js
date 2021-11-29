import { combineReducers } from 'redux';
import filterRed from './filter';
import pizzasRed from './pizzas';

const rootReducer = combineReducers({
    filterRed,
    pizzasRed
})

export default rootReducer;
