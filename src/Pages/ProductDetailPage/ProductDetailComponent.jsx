import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailComponent = () => {
    const {id} = useParams()
    console.log(id)
    return(
        <>
            ProductDetailComponent
        </>
    )
}

export default ProductDetailComponent;