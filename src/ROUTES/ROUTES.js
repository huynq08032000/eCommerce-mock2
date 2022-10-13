import {lazy} from 'react';

const HomePage = lazy(()=>import('../Pages/Homepage/HomePage'))

export const ROUTES = [
    {
        path : '/',
        component : <HomePage/>
    }
]
