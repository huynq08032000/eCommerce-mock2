import React from "react";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
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