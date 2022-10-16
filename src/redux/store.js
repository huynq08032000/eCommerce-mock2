import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./ProductsSlice";
import UserSlice from "./UserSlice";

const store = configureStore({
    reducer : {
        products : ProductsSlice,
        user : UserSlice,
    }
})

export default store;