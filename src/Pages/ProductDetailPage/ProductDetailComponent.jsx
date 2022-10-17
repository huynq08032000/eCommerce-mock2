import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomSeparator from "../../Components/BreadCrumbsComponent/CustomSeparator";
import { apiGetProductById } from "../../config/api";

const ProductDetailComponent = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState({})
    const [breadcumsTmp, setBreadcumsTmp] = useState([])
    const fetchProduct = async (id) => {
        setLoading(true)
        try {
            const res = await axios.get(apiGetProductById + id)
            const data = res.data.data
            console.log(data)
            setBreadcumsTmp(...breadcumsTmp,[{ label: data.product.category, href: '/' }, { label: data.product.name }])
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchProduct(id)
    }, [id])
    return (
        <>
            {loading ? <>Loading...</> : <>
                ProductDetailComponent
                <CustomSeparator breadcumsTmp={breadcumsTmp} />
            </>}

        </>
    )
}

export default ProductDetailComponent;