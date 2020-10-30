import {ADD_NUMBER1} from "../actions/actionTypes";

const initialState = {counter: 200};

export default function counter2(state = initialState, action) {
    console.log(state, action.type);
    switch (action.type) {
        case ADD_NUMBER1:
            return {counter: state.counter + action.payload};
        default:
            return state;
    }
}
