import { Pagination, Typography } from "@mui/material";
import { Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchReviews } from "../../redux/ProductDetailSlice";
import './css/index.scss'
import 'antd/dist/antd.css';
import ReviewItem from "./ReviewItem";
const CustomerReviewsComponent = () => {
    const { reviews, isReviewsLoading, idAddReview } = useSelector(state => state.productDetail)
    const dispatch = useDispatch()
    const { id } = useParams()
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(() => {
        const data = {
            id: id,
            size: 3,
            page: currentPage
        }
        dispatch(fetchReviews(data))
    }, [currentPage, idAddReview])
    return (
        <>
            <Typography fontWeight={700} fontSize={'28px'} lineHeight={'33px'}>Customer Reviews</Typography>
            <div className="review-content-container">
                <Spin spinning={isReviewsLoading}>
                    {reviews.result?.map((el, index) => {
                        return <ReviewItem key={index} review={el} />
                    })}
                </Spin>
            </div>

            <Pagination count={reviews.totalPages} variant="outlined" shape="rounded" style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }} onChange={(e, number) => {
                setCurrentPage(number)
            }} />
        </>
    )
}

export default CustomerReviewsComponent;