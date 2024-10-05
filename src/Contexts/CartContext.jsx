import React, { useContext, useReducer } from 'react';
const { createContext } = require("react");

const CartContext = createContext();

const initialState = {
    cart: []
};


function reducer(state, action) {
    switch(action.type) {
        case "cart/addItem":
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case "cart/removeItem":
            return {
                ...state,
                cart: state.cart.filter((item) => item.name !== action.payload)
            };
        case "cart/increaseQuantity":
            return {
                ...state,
                cart: state.cart.map((item) => item.name === action.payload ? {...item, quantity: item.quantity + 1} : item)
            };
        case "cart/decreaseQuantity":
            if(state.cart.some((item) => item.name === action.payload && item.quantity > 1)) {
                return {
                    ...state,
                    cart: state.cart.map((item) => item.name === action.payload ? {...item, quantity: item.quantity - 1} : item)
                }
            } else if(state.cart.some((item) => item.name === action.payload && item.quantity === 1)) {
                return {
                    ...state,
                    cart: state.cart.filter((item) => item.name !== action.payload)
                }
            };
        case "cart/clear":
            return {
                ...state,
                cart: []
            };
        default:
            return state;
    }
}


const CartProvider = ({children}) => {
    const [{cart}, dispatch] = useReducer(reducer, initialState);

    const addToCart = (product) => {
        const data = {
            ...product,
            quantity: 1,
            id: Date.now(),
        }


        dispatch({
            type: "cart/addItem",
            payload: data
        })
        // console.log(cart)
    }

    const increaseQuantity = (name) => {
        dispatch({
            type: "cart/increaseQuantity",
            payload: name,
        })
    }

    const decreaseQuantity = (name) => {
        dispatch({
            type: "cart/decreaseQuantity",
            payload: name,
        })
    }
    const removeProductFromCart = (name) => {
        dispatch({
            type: "cart/removeItem",
            payload: name
        })
    }

    const startNewOrder = function() {
        dispatch({
            type: "cart/clear"
        })
    }

  return (
    <CartContext.Provider value={{cart, addToCart, increaseQuantity, decreaseQuantity, removeProductFromCart, startNewOrder}}>
        {children}
    </CartContext.Provider>
  )
}

function useCart() {
    const context = useContext(CartContext);
    if(context === undefined) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export default CartProvider;

export { useCart };
