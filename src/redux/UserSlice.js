import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { findIndex } from "../ultis/ultis"

const initState = {
    user: {},
    deviceId: '',
    cart: [],
}

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: initState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        setDeviceId: (state, action) => {
            state.deviceId = action.payload
        },
        clearUser: (state, action) => {
            state.user = {}
            state.deviceId = ''
            state.cart = []
        },
        addCart: (state, action) => {
            const index = findIndex(state.cart, action.payload)
            if (index === -1) {
                state.cart.push(action.payload)
            } else {
                state.cart[index].quantity += action.payload.quantity
            }
        },
        removeCart: (state, action) => {
            state.cart = state.cart.filter(el => el.id !== action.payload.id)
        },
        increaseQuantity: (state, action) => {
            const index = findIndex(state.cart, action.payload)
            state.cart[index].quantity += 1
        },
        decreaseQuantity: (state, action) => {
            if (action.payload.quantity === 1) {
                state.cart = state.cart.filter(el => el.id !== action.payload.id)
            } else {
                const index = findIndex(state.cart, action.payload)
                state.cart[index].quantity -= 1
            }
        }
    },
    extraReducers: (builder) => {

    }
})

export const { setUser, clearUser, setDeviceId, addCart, removeCart, increaseQuantity, decreaseQuantity } = UserSlice.actions;
export default UserSlice.reducer;