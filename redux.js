    const redux = require('redux');

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {

    if (action.type === `ADD`){
        return {counter: state.counter + 1}
    }
    if (action.type === `SUB`){
        return {counter: state.counter - 1}
    }
    if (action.type === `ADD_NUMBER`){
        return {counter: state.counter + action.value}
    }

    return state;
}

const store = redux.createStore(reducer);

store.subscribe(() => {
    console.log(`-`, store.getState());
})

const addCounter = {
    type: `ADD`
}

//console.log(store.getState());

store.dispatch(addCounter);
//console.log(store.getState());

store.dispatch({type: `SUB`})
//console.log(store.getState());

store.dispatch({type: `ADD_NUMBER`, value: 5})
//console.log(store.getState());
