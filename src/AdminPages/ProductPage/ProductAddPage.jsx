import React from "react";
import AdminPage from "../AdminPage";
import ProductAddComponent from "./ProductAddComponent/ProductAddComponent";

const ProductAddPage = () => {
    return (
        <>
            <AdminPage component={<ProductAddComponent />} />
        </>
    )
}
export default ProductAddPage;