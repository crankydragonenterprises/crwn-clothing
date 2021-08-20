import CartActionTypes from './cart.types';
import { AddItemToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                //copy the state and toggle the hidden option
                ...state,
                hidden: !state.hidden,
            }
        case CartActionTypes.ADD_ITEM:
            return {
                //copy the existing state
                ...state,
                //copy all existing cart items and add the clicked item to the list
                cartItems: AddItemToCart(state.cartItems, action.payload)
            }
        default: 
            return state;
    }
}

export default cartReducer;