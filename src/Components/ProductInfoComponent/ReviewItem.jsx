import { Avatar, Rating, Typography } from "@mui/material";
import React from "react";
import { modifyLetter, modifyTime } from "../../ultis/ultis";

const ReviewItem = ({ review }) => {
    return (
        <>
            <div style={{ display: 'flex', padding: '10px', borderBottom: '2px solid #D8D8D8' }}>
                <div style={{ marginRight: '30px' }}><Avatar alt={modifyLetter(review.userReview.username)} src={review.userReview.avatar !== null ? review.userReview.avatar : '/static/images/avatar/2.jpg'} /></div>
                <div>
                    <Typography fontSize={'18px'} fontWeight={700} lineHeight={'21px'}>{review.userReview.username}</Typography>
                    <Rating name="read-only" value={review.rating} readOnly />
                    <Typography fontSize={14} lineHeight={'16px'}>{review.content}</Typography>
                    <Typography fontSize={12} fontWeight={700} lineHeight={'14px'} marginTop={'5px'}>{modifyTime(review.createdAt)}</Typography>
                </div>
            </div>
        </>
    )
}

export default ReviewItem;