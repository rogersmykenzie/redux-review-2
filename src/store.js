import {createStore} from 'redux';

const initialState = {
    products: [],
}

export const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';

function reducer(state=initialState, action) {
    switch(action.type) {
        case UPDATE_PRODUCTS:
        console.log(action)
            return {
                ...state, 
                products: action.payload.slice()
            }
        default: return state;
    }
}

export default createStore(reducer);