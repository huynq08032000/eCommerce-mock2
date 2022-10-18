import { Pagination, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReviews } from "../../redux/ProductDetailSlice";
import './css/index.scss'
import ReviewItem from "./ReviewItem";
const CustomerReviewsComponent = () => {
    const { product, reviews, isReviewsLoading } = useSelector(state => state.productDetail)
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        const data = {
            id: product.id,
            size: 3,
            page: currentPage
        }
        dispatch(fetchReviews(data))
    }, [currentPage])
    return (
        <>
            <Typography fontWeight={700} fontSize={'28px'} lineHeight={'33px'}>Customer Reviews</Typography>
            <div className="review-content-container">
                {isReviewsLoading ? <>Loading....</> : <>
                    {reviews.result?.map((el, index) => {
                        return <ReviewItem key={index} review={el} />
                    })}
                </>}

            </div>

            <Pagination count={reviews.totalPages} variant="outlined" shape="rounded" style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }} onChange={(e, number) => {
                setCurrentPage(number)
            }} />
        </>
    )
}

export default CustomerReviewsComponent;