export const addPizza = (pizza) =>{
    console.log(pizza);
    return {
        type:'ADD_PIZZAS',
        payload: pizza
   }
}
