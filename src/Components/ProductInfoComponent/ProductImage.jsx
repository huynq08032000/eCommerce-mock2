import { Image } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import './css/index.scss'
const ProductImage = () => {
    const { product } = useSelector(state => state.productDetail)
    const [mainImage, setMainImage] = useState(product.images?.[0])
    return (
        <>
            <div className="main-image">
                <Image
                    width={'100%'}
                    src={mainImage?.url}
                />
            </div>
            <div className="child-image">
                {product.images && product.images.map((el) => {
                    return <div className="child-item-image" key={el.id}>
                        <Image
                            width={'100%'}
                            src={el.url}
                            preview={false}
                            onClick={() => setMainImage(el)}
                        />
                    </div>
                })}
            </div>
        </>
    )
}

export default ProductImage;