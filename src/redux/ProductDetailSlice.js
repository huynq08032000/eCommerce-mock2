import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { toast } from "react-toastify"
import { toastCss } from "../Components/StyleComponent/StyleComponent"
import { apiGetProductById } from "../config/api"
import axiosInstance from "../ultis/customAxios"

const initState = {
    isLoading: false,
    isReviewsLoading: false,
    isAddReview: false,
    isAddLoading: false,
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
                state.idAddReview = false
                state.product = action.payload.product
                state.reviews = action.payload.reviews
            })
            .addCase(addReviews.pending, (state, action) => {
                state.isAddLoading = true
            })
            .addCase(addReviews.fulfilled, (state, action) => {
                state.isAddLoading = false
                state.idAddReview = true
            })
            .addCase(addReviews.rejected, (state, action) => {
                state.isAddLoading = false
                state.idAddReview = false
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
export const addReviews = createAsyncThunk('ProductDetail/addReviews', async (values) => {
    const id = values.productId
    try {
        const res = await axiosInstance.post(apiGetProductById + id + '/reviews', values)
        const data = res.data.data
        toast.success('Post review success', toastCss)
        return data;
    } catch (error) {
        toast.error(error.response.data.message, toastCss)
    }
})
export const { } = ProductDetailSlice.actions;
export default ProductDetailSlice.reducer;