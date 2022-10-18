import { configureStore } from "@reduxjs/toolkit";
import ProductDetailSlice from "./ProductDetailSlice";
import ProductsSlice from "./ProductsSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer : {
        products : ProductsSlice,
        user : UserSlice,
        productDetail : ProductDetailSlice
    }
})

export default store;