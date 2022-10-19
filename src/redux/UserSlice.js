import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initState = {
    user : {},
    deviceId : '',
    cart : [],
}

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState: initState,
    reducers: {
        setUser : (state, action) => {
            state.user = action.payload
        },
        setDeviceId : (state, action) => {
            state.deviceId = action.payload
        },
        clearUser: (state,action) => {
            state.user = {}
            state.deviceId = ''
        }
    },
    extraReducers: (builder) => {

    }
})

export const { setUser,setDeviceId } = UserSlice.actions;
export default UserSlice.reducer;