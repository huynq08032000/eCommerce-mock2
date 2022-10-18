import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { apiGetProductById } from "../config/api"

const initState = {
    isLoading: false,
    product: {},
    reviews: {},
    breadcums: []
}

const ProductDetailSlice = createSlice({
    name: 'ProductDetailSlice',
    initialState: initState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.isLoading = false
                state.product = action.payload.product
                state.reviews = action.payload.reviews
                state.breadcums = [{ label: action.payload.product.category, href: '/' },{label : action.payload.product.name}]
            })
    }
})

export const fetchProductById = createAsyncThunk('ProductDetail/fetchProductById', async (id) => {
    try {
        const res = await axios.get(apiGetProductById + id)
        const data = res.data.data
        return data;
    } catch (error) {
        console.log(error)
    }
})

export const { } = ProductDetailSlice.actions;
export default ProductDetailSlice.reducer;