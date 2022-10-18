import { CardContent, Grid, Typography } from "@mui/material";
import { Image, Tag, Empty } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLastestProduct } from "../../redux/ProductsSlice";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Title from "../TitleComponent/Title";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import "./css/index.scss"
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";

const LastestProductComponent = () => {
    const dispatch = useDispatch()
    const { isLastestLoading, lastestProducts, category } = useSelector(state => state.products)
    useEffect(() => {
        const searchParm = {
            size: 7,
            sortBy: 'id',
            order: 'DESC',
        }
        if (category !== '') searchParm.category = category
        dispatch(fetchLastestProduct(searchParm))
    }, [category])
    
    return (
        <>
            <Title label={'Bestsellers'} />
            {isLastestLoading ? <>Loading...</> : <>{lastestProducts.length === 0 ? <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} /> : <>
                <Grid container spacing={2} columns={16}>

                    {lastestProducts.map(el => {
                        return <Grid item sm={8} lg={4} key={el.id} align='center'>
                            <CardProduct product={el}/>
                        </Grid>
                    })}
                </Grid>
            </>}</>}

        </>
    )
}

export default LastestProductComponent;