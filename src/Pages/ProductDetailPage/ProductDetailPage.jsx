import React from "react";
import UserComponent from "../UserComponent/UserComponent";
import ProductDetailComponent from "./ProductDetailComponent";

const ProductDetailPage = () => {
    return (
        <>
            <UserComponent component={<ProductDetailComponent/>} />
        </>
    )
}

export default ProductDetailPage;