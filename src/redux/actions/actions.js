import {ADD, ADD_NUMBER, ADD_NUMBER1, SUB} from "./actionTypes";

export function add() {
    return {type: ADD}
}

export function sub() {
    return {type: SUB};
}

export function addNumber(number) {
    return {type: ADD_NUMBER, payload: number};
}

export function addAsyncNumber(number) {
    return (dispatch) => {
        setTimeout(() => dispatch(addNumber(number)), 3000);
    }

}

export function addNumber1(number) {
    return {type: ADD_NUMBER1, payload: number};
}

