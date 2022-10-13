import { CardContent, Grid, Typography } from "@mui/material";
import { Image } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLastestProduct } from "../../redux/ProductsSlice";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Rating from '@mui/material/Rating';
import Title from "../TitleComponent/Title";


const LastestProductComponent = () => {
    const dispatch = useDispatch()
    const { isLastestLoading, lastestProducts } = useSelector(state => state.products)
    useEffect(() => {
        dispatch(fetchLastestProduct({
            size: 8,
            sortBy: 'id',
            order: 'DESC'
        }))
    }, [])
    return (
        <>
            <Title label={'Lastest Products'} />
            {isLastestLoading ? <>Loading...</> : <Grid container spacing={2} columns={16}>
                {lastestProducts.map(el => {
                    return <Grid item sm={8} lg={4} key={el.id} style={{ margin: '0 auto' }}>
                        <Card sx={{ maxWidth: 350, padding: '20px', boxShadow: 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px' }}>
                            <CardMedia
                                component="img"
                                height="194"
                                image={el.images[0] ? el.images[0].url : ''}
                            />
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {el.name}
                                </Typography>
                                <div style={{ display: 'flex',overflowWrap: 'break-word' }}>
                                    <Rating name="read-only" value={parseFloat(el.rating)} readOnly />
                                    <div >
                                        {el.numOfReviews} reviewers
                                    </div>
                                </div>

                                <div>
                                    $ {el.price}
                                </div>
                            </CardContent>

                        </Card>
                    </Grid>
                })}
            </Grid>}

        </>
    )
}

export default LastestProductComponent;