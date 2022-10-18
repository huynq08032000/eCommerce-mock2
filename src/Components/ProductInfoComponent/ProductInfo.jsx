import { Rating, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import './css/index.scss'

const ProductInfo = () => {
    const { product } = useSelector(state => state.productDetail)
    console.log(product)
    return (
        <>
            <div className="product-info-first">
                <div className="productName">
                    <Typography fontWeight={700} fontSize='40px' lineHeight={'47px'}>{product.name}</Typography>
                </div>
                <div className="product-rating">
                    <div className="product-rating-child"><Rating name="read-only" value={product.rating} readOnly /></div>
                    <div className="product-rating-child">{product.numOfReviews} Reviews</div>
                </div>
                <div className="product-description">
                    {product.description}
                </div>
            </div>
            <div className="product-info-seccond">
                <div style={{display : 'flex'}}>
                    <div style={{ display: 'flex', marginRight : '50px' }}><Typography fontSize={'14px'}>Availability:</Typography>{product.countInStock > 0 ? <Typography color={'green'} fontSize={'14px'}>In Stock</Typography> : <Typography color={'red'} fontSize={'14px'}>Out Stock</Typography>}</div>
                    <div><Typography fontSize={'14px'}>Brand: {product.brand} </Typography></div>
                </div>
            </div>

        </>
    )
}

export default ProductInfo