import React from "react";
import ProductImage from "./ProductImage";
import './css/index.scss'
import ProductInfo from "./ProductInfo";
import ProductTabComponent from "./ProductTabComponent";
const ProductInfoComponent = () => {   

    return (
        <>
            <div className="product-info-container">
                <div className="product-image">
                    <ProductImage />
                </div>
                <div className="product-info">
                    <ProductInfo/>
                </div>
            </div>
            <div className="product-tab-component">
                <ProductTabComponent/>
            </div>
        </>
    )
}

export default ProductInfoComponent;