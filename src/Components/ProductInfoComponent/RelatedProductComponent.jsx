import { Stack } from "@mui/material";
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
            Related Product Component
            <div className="related-product" style={{ width:'100%',overflowX: 'scroll', display : 'flex' }}>
                {relatedProduct.map((el) => {
                    return <CardProduct product={el} key={el.id} />
                })}
            </div>
        </>
    )
}

export default RelatedProductComponent;