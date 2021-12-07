const inisialState = {
    items:[],
    sum: 0,
    count: 0
}

const cartRed = (state =inisialState, action) =>{
    switch (action.type){
        case 'ADD_PIZZAS':{
            console.log(state.items)
            const arr = state.items;
            arr.push(action.payload);
            console.log(arr)
        return {
            ...state,
            items: arr
        }
        }

        default: return state
    }
}

export default cartRed;