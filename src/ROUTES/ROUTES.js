import { lazy } from 'react';

const HomePage = lazy(() => import('../Pages/Homepage/HomePage'))
const ProductDetailPage = lazy(() => import('../Pages/ProductDetailPage/ProductDetailPage'))
const ShoppingCartPage = lazy(() => import('../Pages/ShoppingCartPage/ShoppingCartPage'))
const CheckOutPage = lazy(() => import('../Pages/CheckOutPage/CheckOutPage'))
export const ROUTES = [
    {
        path: '/',
        component: <HomePage />
    },
    {
        path: '/productDetail/:id/:category',
        component: <ProductDetailPage />
    },
    {
        path: '/shoppingcart',
        component: <ShoppingCartPage />
    },
    {
        path: '/checkout',
        component: <CheckOutPage />
    }
]
