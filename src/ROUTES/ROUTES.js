import { lazy } from 'react';

const HomePage = lazy(() => import('../Pages/Homepage/HomePage'))
const ProductDetailPage = lazy(() => import('../Pages/ProductDetailPage/ProductDetailPage'))
const ShoppingCartPage = lazy(() => import('../Pages/ShoppingCartPage/ShoppingCartPage'))
const CheckOutPage = lazy(() => import('../Pages/CheckOutPage/CheckOutPage'))
const MyProfilePage = lazy(() => import('../Pages/MyAccountPage/MyProfilePage'))
const OrderHistoryPage = lazy(() => import('../Pages/MyAccountPage/OrderHistoryPage'))
const DashboradPage = lazy(() => import('../AdminPages/DashboardPage/DashboradPage'))
const ProductListPage = lazy(() => import('../AdminPages/ProductPage/ProductListPage'))
const ProductAddPage = lazy(() => import('../AdminPages/ProductPage/ProductAddPage'))
const ProductEditPage = lazy(() => import('../AdminPages/ProductPage/ProductEditPage'))
const UserListPage = lazy(() => import('../AdminPages/UserPage/UserListPage'))
const UserAddPage = lazy(() => import('../AdminPages/UserPage/UserAddPage'))
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
    },
    {
        path: '/addProduct',
        component: <ProductAddPage />,
        role: ['admin']
    },
    {
        path: '/editProduct/:id',
        component: <ProductEditPage />,
        role: ['admin']
    },
    {
        path: '/userList',
        component: <UserListPage />,
        role: ['admin']
    },
    {
        path: '/addUser',
        component: <UserAddPage />,
        role: ['admin']
    }
]
