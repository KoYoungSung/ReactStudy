import React, { useReducer } from 'React'

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMNET':
            return state - 1;
        default: 
            return state;
    }
}

function Counter () {
    const [number, dispatcher] = useReducer(reducer, 0)

    const onIncrease = () => {
        dispatcher({type:'INCREASE'})
    };
    //https://react.vlpt.us/basic/20-useReducer.html


}