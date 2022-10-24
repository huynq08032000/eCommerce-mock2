import { lazy } from 'react';

const HomePage = lazy(() => import('../Pages/Homepage/HomePage'))
const ProductDetailPage = lazy(() => import('../Pages/ProductDetailPage/ProductDetailPage'))
const ShoppingCartPage = lazy(() => import('../Pages/ShoppingCartPage/ShoppingCartPage'))
const CheckOutPage = lazy(() => import('../Pages/CheckOutPage/CheckOutPage'))
const MyProfilePage = lazy(() => import('../Pages/MyAccountPage/MyProfilePage'))
const OrderHistoryPage = lazy(() => import('../Pages/MyAccountPage/OrderHistoryPage'))
const DashboradPage = lazy(() => import('../AdminPages/DashboardPage/DashboradPage'))
const ProductListPage = lazy(() => import('../AdminPages/ProductPage/ProductListPage'))
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
        role: ['user', 'admin']
    },
    {
        path: '/checkout',
        component: <CheckOutPage />,
        role: ['user', 'admin']
    },
    {
        path: '/myprofile',
        component: <MyProfilePage />,
        role: ['user', 'admin']
    },
    {
        path: '/orderhistory',
        component: <OrderHistoryPage />,
        role: ['user', 'admin']
    },
    {
        path: '/admin',
        component: <DashboradPage />,
        role: ['admin']
    },
    {
        path: '/productList',
        component: <ProductListPage />,
        role: ['admin']
    }
]
