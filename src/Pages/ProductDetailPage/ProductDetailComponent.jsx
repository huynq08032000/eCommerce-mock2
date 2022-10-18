import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomSeparator from "../../Components/BreadCrumbsComponent/CustomSeparator";
import ProductInfoComponent from "../../Components/ProductInfoComponent/ProductInfoComponent";
import { apiGetProductById } from "../../config/api";
import { fetchProductById } from "../../redux/ProductDetailSlice";

const ProductDetailComponent = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const { isLoading, breadcums } = useSelector(state => state.productDetail)
    useEffect(() => {
        dispatch(fetchProductById(id))
    }, [id])
    return (
        <>
            {isLoading ? <>Loading...</> : <>
                <CustomSeparator breadcums={breadcums} />
                <ProductInfoComponent />
            </>}

        </>
    )
}

export default ProductDetailComponent;