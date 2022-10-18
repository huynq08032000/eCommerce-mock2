import { Button, Rating, Typography } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './css/index.scss'
import { toast } from "react-toastify";

const ProductInfo = () => {
    const { product } = useSelector(state => state.productDetail)
    const [quantity, setQuantity] = useState(1)
    const handleIncrease = () => {
        setQuantity(prev => prev + 1)
    }
    const handleDecrease = () => {
        setQuantity(prev => prev - 1)
    }
    useLayoutEffect(() => {
        if (quantity < 1) {
            setQuantity(1)
        }
        if (quantity > product.countInStock) {
            toast.warning(`We only have ${product.countInStock} in Stock!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            setQuantity(prev => product.countInStock)
        }
    }, [quantity])
    return (
        <>
            <div className="product-info-first">
                <div className="productName">
                    <Typography fontWeight={700} fontSize='40px' lineHeight={'47px'}>{product.name}</Typography>
                </div>
                <div className="product-rating">
                    <div className="product-rating-child"><Rating name="read-only" value={product.rating} readOnly /></div>
                    <div className="product-rating-child"><Typography fontSize={'16px'} fontWeight={700}>{product.numOfReviews} Reviews </Typography></div>
                </div>
                <div className="product-description">
                    <Typography fontSize={'16px'}>{product.description} </Typography>
                </div>
            </div>
            <div className="product-info-seccond">
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', marginRight: '50px' }}><Typography fontSize={'14px'}>Availability:</Typography>{product.countInStock > 0 ? <Typography color={'green'} fontSize={'14px'}>In Stock</Typography> : <Typography color={'red'} fontSize={'14px'}>Out Stock</Typography>}</div>
                    <div><Typography fontSize={'14px'}>Brand: {product.brand} </Typography></div>
                </div>
                <div>
                    <Typography fontWeight={700} fontSize={'32px'}>${product.price}</Typography>
                </div>
                <div>
                    <Typography fontWeight={700} fontSize={'16px'} lineHeight={'18px'} color={'#5A5A5A'}>Quantity:</Typography>
                </div>
                {parseInt(product.countInStock) === 0 ? <><Typography>We will sell soon!</Typography></> : <>
                    <div style={{ display: 'flex' }}>
                        <div className="btn-group">
                            <div onClick={handleDecrease}><Button style={{ color: '#33A0FF' }}>-</Button></div>
                            <div>{quantity}</div>
                            <div onClick={handleIncrease}><Button style={{ color: '#33A0FF' }}>+</Button></div>
                        </div>
                        <div className="btn-add-to-cart">
                            <Button style={{ backgroundColor: '#FFD333', color: '#000000', padding: '5px 20px' }}><ShoppingCartOutlinedIcon />Add to Cart</Button>
                        </div>
                    </div>
                </>}

            </div>
        </>
    )
}

export default ProductInfo