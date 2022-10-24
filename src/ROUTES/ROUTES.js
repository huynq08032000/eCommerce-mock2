import { lazy } from 'react';

const HomePage = lazy(() => import('../Pages/Homepage/HomePage'))
const ProductDetailPage = lazy(() => import('../Pages/ProductDetailPage/ProductDetailPage'))
const ShoppingCartPage = lazy(() => import('../Pages/ShoppingCartPage/ShoppingCartPage'))
const CheckOutPage = lazy(() => import('../Pages/CheckOutPage/CheckOutPage'))
const MyProfilePage = lazy(() => import('../Pages/MyAccountPage/MyProfilePage'))
export const ROUTES = [
    {
        path: '/',
        component: <HomePage />,
    },
    {
        path: '/productDetail/:id/:category',
        component: <ProductDetailPage />
    },
    {
        path: '/shoppingcart',
        component: <ShoppingCartPage />,
        role: ['user']
    },
    {
        path: '/checkout',
        component: <CheckOutPage />,
        role: ['user']
    },
    {
        path: '/myprofile',
        component: <MyProfilePage />,
        role: ['user']
    }
]
