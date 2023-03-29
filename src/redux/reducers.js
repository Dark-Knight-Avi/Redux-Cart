import { createReducer } from '@reduxjs/toolkit'

const initialState = {
    cart: []
}

export const cartReducer = createReducer(
    initialState,
    {
        addToCart: (state, action) => {
            let flag = false
            for (let item of state.cart) {
                if (item.id === action.payload.id) {
                    flag = true
                }
            }
            if (flag) {
                var pdt = state.cart.filter((item) => item.id === action.payload.id)[0]
            }
            state.cart = flag ? [...state.cart.filter((item) => item.id !== action.payload.id), { ...pdt, ...{ count: pdt.count + 1 } }] : [...state.cart, { ...action.payload, ...{ count: 1 } }]
        },
        deleteFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        updateCartItem: (state, action) => {
            // let pdt = state.cart.filter(item => item.id === action.payload.id)[0]
            // state.cart = [...state.cart.filter((item) => item.id !== action.payload.id), { ...pdt, ...{ count: pdt.count + action.payload.value } }]
            for (let item of state.cart) {
                if (item.id === action.payload.id) {
                    item.count += action.payload.value
                }
            }
        }
    }
)