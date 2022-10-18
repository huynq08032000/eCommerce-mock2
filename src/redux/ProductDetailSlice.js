import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { apiGetProductById } from "../config/api"

const initState = {
    isLoading: false,
    isReviewsLoading: false,
    isPostReview: false,
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
                state.breadcums = [{ label: action.payload.product.category, href: '/' }, { label: action.payload.product.name }]
            })
            .addCase(fetchReviews.pending, (state, action) => {
                state.isReviewLoading = true
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.isReviewLoading = false
                state.reviews = action.payload.reviews
            })
    }
})

export const fetchProductById = createAsyncThunk('ProductDetail/fetchProductById', async (id) => {
    try {
        const res = await axios.get(apiGetProductById + id, {
            params: {
                size: 3,
                page: 1
            }
        })
        const data = res.data.data
        return data;
    } catch (error) {
        console.log(error)
    }
})
export const fetchReviews = createAsyncThunk('ProductDetail/fetchReview', async (data) => {
    const id = data.id
    const searchParams = {
        size: data.size,
        page: data.page
    }
    try {
        const res = await axios.get(apiGetProductById + id, {
            params: searchParams
        })
        const data = res.data.data
        return data;
    } catch (error) {
        console.log(error)
    }
})
export const { } = ProductDetailSlice.actions;
export default ProductDetailSlice.reducer;