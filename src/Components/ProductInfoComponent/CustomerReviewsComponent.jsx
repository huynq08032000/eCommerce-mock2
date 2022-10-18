import { Pagination, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import './css/index.scss'
import ReviewItem from "./ReviewItem";
const CustomerReviewsComponent = () => {
    const { reviews } = useSelector(state => state.productDetail)
    return (
        <>
            <Typography fontWeight={700} fontSize={'28px'} lineHeight={'33px'}>Customer Reviews</Typography>
            <div className="review-content-container">
                {reviews.result?.map((el, index) => {
                    return <ReviewItem key={index} review={el} />
                })}
            </div>

            <Pagination count={reviews.totalPages} variant="outlined" shape="rounded" style={{ display: 'flex', justifyContent: 'center', marginBottom : '30px' }} />
        </>
    )
}

export default CustomerReviewsComponent;