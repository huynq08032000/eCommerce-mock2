import React from "react";
import { CardContent, Typography } from "@mui/material";
import { Tag } from "antd";
import { useDispatch, useSproductector } from "react-redux";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import 'antd/dist/antd.css';
import { Link } from "react-router-dom";
import { addCart } from "../../redux/UserSlice";

const CardProduct = ({ product }) => {
    const dispatch = useDispatch()
    const handleAddCart = (obj) => {
        const tmpObj = { ...obj }
        tmpObj.quantity = 1
        dispatch(addCart(tmpObj))
    }
    return (
        <>
            <Card sx={{ width: '100%', height: '420px', padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px', marginRight: '20px' }}>
                <CardMedia
                    style={{ borderRadius: '5px', widht: 225 }}
                    component="img"
                    height="200"
                    image={product.images[0] ? product.images[0].url : ''}
                />
                <CardContent style={{ padding: '5px 0' }}>
                    <Typography variant="body2" overflow={'hidden'} color="text.secondary" textAlign={'left'} className='content-name' fontSize={'32px'} fontWeight={'700'} textOverflow={'ellipsis'} whiteSpace={'nowrap'}>
                        <Link to={`/productDetail/${product.id}/${product.category}`} style={{ color: '#000000' }}>{product.name}</Link>
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign={'left'} className='content-name' fontSize={18} fontWeight={700}>
                        ID: {product.id}
                    </Typography>
                    <div style={{ display: 'flex', overflowWrap: 'break-word', justifyContent: 'space-between' }}>
                        <Rating name="read-only" value={parseFloat(product.rating)} readOnly />
                        <div >
                            <Tag color="#FFD333" style={{ borderRadius: '5px', height: '30px', display: 'flex', alignItems: 'center' }}>
                                <Typography fontSize={16} fontWeight={700} color='#C90404'>50% Off</Typography>
                            </Tag>
                        </div>
                    </div>
                    <Typography style={{ fontSize: '24px', fontWeight: '700', letterSpacing: '1px', display: 'flex', justifyContent: 'space-between' }} color="text.secondary" textAlign={'left'}>
                        ${product.price}
                        {product.countInStock > 0 && <IconButton color="primary" aria-labproduct="add to shopping cart" onClick={() => handleAddCart(product)}>
                            <AddShoppingCartIcon />
                        </IconButton>}
                    </Typography>
                    {
                        product.countInStock > 0 ? <><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <Tag color="#87d068" style={{ borderRadius: '56px' }}>
                                    Avaliable
                                </Tag>
                            </div>

                        </div>
                        </> : <><div style={{ textAlign: 'left' }}>
                            <Tag color="#cd201f" style={{ borderRadius: '56px', marginTop: '5px' }}>
                                Out stock
                            </Tag>
                        </div>
                        </>
                    }

                </CardContent>
            </Card>
        </>
    )
}

export default CardProduct;