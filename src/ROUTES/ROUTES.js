import {lazy} from 'react';

const HomePage = lazy(()=>import('../Pages/Homepage/HomePage'))
const ProductDetailPage = lazy(() => import('../Pages/ProductDetailPage/ProductDetailPage'))

export const ROUTES = [
    {
        path : '/',
        component : <HomePage/>
    },
    {
        path : '/productDetail/:id',
        component : <ProductDetailPage/>
    }
]
