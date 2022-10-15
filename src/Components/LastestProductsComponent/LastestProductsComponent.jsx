import { CardContent, Grid, Typography } from "@mui/material";
import { Image, Tag } from "antd";
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

const LastestProductComponent = () => {
    const dispatch = useDispatch()
    const { isLastestLoading, lastestProducts } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(fetchLastestProduct({
            size: 7,
            sortBy: 'id',
            order: 'DESC'
        }))
    }, [])
    return (
        <>
            <Title label={'Bestsellers'} />
            {isLastestLoading ? <>Loading...</> : <Grid container spacing={2} columns={16}>
                {lastestProducts.map(el => {
                    return <Grid item sm={8} lg={4} key={el.id} align='center'>
                        <Card sx={{ maxWidth: 300, padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={el.images[0] ? el.images[0].url : ''}
                            />
                            <CardContent style={{ padding: '5px 0' }}>
                                <Typography variant="body2" color="text.secondary" textAlign={'left'} className='content-name' fontSize={'20px'} fontWeight={'700'}>
                                    {el.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" textAlign={'left'} className='content-name'>
                                    {el.id}
                                </Typography>
                                <div style={{ display: 'flex', overflowWrap: 'break-word' }}>
                                    <Rating name="read-only" value={parseFloat(el.rating)} readOnly />
                                    <div >
                                        {el.numOfReviews} reviewers
                                    </div>
                                </div>
                                <Typography style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '1px' }} color="text.secondary" textAlign={'left'}>
                                    ${el.price}
                                </Typography>
                                {
                                    el.countInStock > 0 ? <><div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div>
                                            <Tag color="#87d068" style={{ borderRadius: '56px' }}>
                                                Avaliable
                                            </Tag>
                                        </div>
                                        <div>
                                            <IconButton color="primary" aria-label="add to shopping cart">
                                                <AddShoppingCartIcon />
                                            </IconButton>
                                        </div>
                                    </div>
                                    </> : <><div>
                                        <Tag color="#cd201f" style={{ borderRadius: '56px' }}>
                                            Out stock
                                        </Tag>
                                    </div>
                                    </>
                                }

                            </CardContent>
                        </Card>
                    </Grid>
                })}
            </Grid>}

        </>
    )
}

export default LastestProductComponent;