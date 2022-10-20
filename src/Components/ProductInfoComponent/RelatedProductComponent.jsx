import { Grid, Stack, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiGetProductById } from "../../config/api";
import CardProduct from "../CardProduct/CardProduct";

const RelatedProductComponent = () => {
    const { category } = useParams()
    const [relatedProduct, setRelatedProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const fetchCategory = async (cate) => {
        setIsLoading(true)
        try {
            const res = await axios.get(apiGetProductById, {
                params: {
                    category: cate
                }
            })
            setRelatedProduct(res.data.data.result)
        } catch (error) {
            console.log(error)
        }
        setIsLoading(false)
    }
    useEffect(() => {
        fetchCategory(category)
    }, [category])
    return (
        <>
            <div style={{ padding: '10px 30px', display: 'flex', alignItems: 'center' }}>
                <Typography fontWeight={700} fontFamily={'Arial'} fontSize={24} lineHeight={'27.6px'}>Related Product Component</Typography>
                <div style={{ width: '841px', border: '1px solid #5A5A5A', height: '1px', margin: '0 10px' }}>
                </div>
            </div>
            <div className="related-product" style={{ width: '100%', display: 'flex' }}>
                <Grid container spacing={2} columns={16}>
                    {relatedProduct.map(el => {
                        return <Grid item sm={8} lg={4} key={el.id} align='center'>
                            <CardProduct product={el} />
                        </Grid>
                    })}
                </Grid>
            </div>
        </>
    )
}

export default RelatedProductComponent;