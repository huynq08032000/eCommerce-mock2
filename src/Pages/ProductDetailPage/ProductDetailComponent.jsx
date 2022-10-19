import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CustomSeparator from "../../Components/BreadCrumbsComponent/CustomSeparator";
import ProductInfoComponent from "../../Components/ProductInfoComponent/ProductInfoComponent";
import RelatedProductComponent from "../../Components/ProductInfoComponent/RelatedProductComponent";
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
                <RelatedProductComponent/>
            </>}

        </>
    )
}

export default ProductDetailComponent;