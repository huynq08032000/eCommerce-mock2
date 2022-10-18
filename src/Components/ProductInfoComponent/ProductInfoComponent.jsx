import React from "react";
import ProductImage from "./ProductImage";
import './css/index.scss'
import ProductInfo from "./ProductInfo";
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

        </>
    )
}

export default ProductInfoComponent;