import { Button, Rating, Typography } from "@mui/material";
import React, { useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './css/index.scss'
import { toast } from "react-toastify";
import { Tag } from "antd";
import { addCart } from "../../redux/UserSlice";

const colorOption = [
    {
        backgroundColor: '#006CFF',
        value: 'blue'
    },
    {
        backgroundColor: '#FC3E39',
        value: 'red'
    },
    {
        backgroundColor: '#171717',
        value: 'black'
    },
    {
        backgroundColor: '#FFF600',
        value: 'yellow'
    }
]
const ProductInfo = () => {
    const dispatch = useDispatch()
    const { product } = useSelector(state => state.productDetail)
    const [quantity, setQuantity] = useState(1)
    const handleIncrease = () => {
        if (quantity === parseInt(product.countInStock)) return
        setQuantity(prev => prev + 1)
    }
    const handleDecrease = () => {
        if (quantity === 1) return;
        setQuantity(prev => prev - 1)
    }
    const [active, setActive] = useState(0)
    const chooseColor = (index, color) => {
        const style = { padding: '5px', width: 'auto', height: 'auto', borderRadius: '50%', margin: '10px 20px 10px 10px' }
        if (active === index) {
            style.border = `1px solid ${color}`
            return style
        }
        return style
    }
    const handleAdd = () => {
        const tmpProduct = { ...product }
        tmpProduct.quantity = quantity;
        dispatch(addCart(tmpProduct))
    }
    return (
        <>
            <div className="product-info-first">
                <div className="productName">
                    <Typography fontWeight={700} fontSize='40px' lineHeight={'47px'} fontFamily={'Roboto'}>{product.name}</Typography>
                </div>
                <div className="product-rating">
                    <div className="product-rating-child"><Rating name="read-only" value={product.rating} readOnly /></div>
                    <div className="product-rating-child"><Typography fontSize={'16px'} fontWeight={700}>{product.numOfReviews} Reviews </Typography></div>
                    <div className="product-rating-child"><Typography fontSize={'16px'} fontWeight={700}>3k Sold</Typography></div>
                </div>
                <div className="product-description">
                    <Typography fontSize={'16px'}>{product.description} </Typography>
                </div>
            </div>
            <div className="product-info-seccond">
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', marginRight: '50px' }}><Typography fontSize={'14px'}>Availability:</Typography>{product.countInStock > 0 ? <Typography color={'green'} fontSize={'14px'}>In Stock</Typography> : <Typography color={'red'} fontSize={'14px'}>Out Stock</Typography>}</div>
                    <div><Typography fontSize={'14px'} style={{ marginRight: '50px' }}>Brand: {product.brand} </Typography></div>
                    <div><Typography fontSize={'14px'}>SKU: 83690/{`${product.id}`} </Typography></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography fontWeight={700} fontSize={'32px'} style={{ marginRight: '20px' }}>${product.price}</Typography>
                    <Tag color="#FFD333" style={{ borderRadius: '5px', height: '30px', display: 'flex', alignItems: 'center' }}>
                        <Typography fontSize={16} fontWeight={700} color='#C90404'>50% Off</Typography>
                    </Tag>
                </div>
                <div>
                    <Typography fontWeight={700} fontSize={'16px'} lineHeight={'18px'} color={'#5A5A5A'}>Select Color:</Typography>
                    <div style={{ display: 'flex' }}>
                        {colorOption.map((el, index) => {
                            return <div key={index} style={chooseColor(index, el.backgroundColor)} onClick={() => setActive(index)}>
                                <div key={index} style={{ backgroundColor: `${el.backgroundColor}`, width: '20px', height: '20px', margin: '0', borderRadius: '50%' }}>
                                </div>
                            </div>

                        })}

                    </div>
                </div>
                <div>
                    <Typography fontWeight={700} fontSize={'16px'} lineHeight={'18px'} color={'#5A5A5A'}>Quantity:</Typography>
                </div>
                {parseInt(product.countInStock) === 0 ? <><Typography>We will sell soon!</Typography></> : <>
                    <div style={{ display: 'flex' }}>
                        <div className="btn-group">
                            <div onClick={handleDecrease}><Button style={{ color: '#33A0FF', fontSize: '15px', fontWeight: '700' }}>-</Button></div>
                            <div>{quantity}</div>
                            <div onClick={handleIncrease}><Button style={{ color: '#33A0FF', fontSize: '15px', fontWeight: '700' }}>+</Button></div>
                        </div>
                        <div className="btn-add-to-cart">
                            <Button style={{ backgroundColor: '#FFD333', color: '#000000', padding: '10px 20px', textTransform: 'none' }} onClick={handleAdd}><ShoppingCartOutlinedIcon /><Typography fontSize={16} fontWeight={700}>Add to cart</Typography></Button>
                        </div>
                    </div>
                </>}

            </div>
        </>
    )
}

export default ProductInfo