import React from "react";
import AdminPage from "../AdminPage";
import ProductEditComponent from "./ProductEditComponent/ProductEditComponent";

const ProducEditPage = () => {
    return (
        <AdminPage component={<ProductEditComponent />} />
    )
}

export default ProducEditPage;