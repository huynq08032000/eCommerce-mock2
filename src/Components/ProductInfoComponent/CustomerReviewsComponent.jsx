import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const CustomerReviewsComponent = () => {
    const { reviews } = useSelector(state => state.productDetail)
    console.log(reviews)
    return (
        <>
            <Typography fontWeight={700} fontSize={'28px'} lineHeight={'33px'}>Customer Reviews</Typography>
        </>
    )
}

export default CustomerReviewsComponent;