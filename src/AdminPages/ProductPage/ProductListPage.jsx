import React from "react";
import AdminPage from "../AdminPage";
import ProductListComponent from "./ProductListComponent/ProductListComponent";

const ProductListPage = () => {
    return (
        <>
            <AdminPage component={<ProductListComponent />} />
        </>
    )
}
export default ProductListPage;