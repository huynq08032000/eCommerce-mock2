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
        },
        addCart: (state, action) => {
            const index = findIndex(state.cart, action.payload)
            if (index === -1) {
                state.cart.push(action.payload)
            } else {
                state.cart[index].quantity += action.payload.quantity
            }

            // state.cart = state.cart.push(action.payload)
        }
    },
    extraReducers: (builder) => {

    }
})

export const { setUser, setDeviceId, addCart } = UserSlice.actions;
export default UserSlice.reducer;