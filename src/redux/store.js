import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import ProductDetailSlice from "./ProductDetailSlice";
import ProductsSlice from "./ProductsSlice";
import UserSlice from "./UserSlice";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistReducer } from 'redux-persist';
import createTransform from "redux-persist/es/createTransform";

const reducers = combineReducers({
    products: ProductsSlice,
    user: UserSlice,
    productDetail: ProductDetailSlice
});
const MyTransformer = createTransform(
    (inboundState, key) => ({ ...inboundState, b64: window.btoa(inboundState.b64) }),
    (outboundState, key) => ({ ...outboundState, b64: window.atob(outboundState.b64) }),
    {}
);
const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    transform: [MyTransformer],
    whitelist: ['user']
}
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
    reducer: persistedReducer,
})
export default store;