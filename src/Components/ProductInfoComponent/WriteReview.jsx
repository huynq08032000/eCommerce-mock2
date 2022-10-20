import { LoadingButton } from "@mui/lab";
import { Rating, TextField, Typography } from "@mui/material";
import { Alert } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addReviews } from "../../redux/ProductDetailSlice";

const WriteReview = () => {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const { product, isAddLoading } = useSelector(state => state.productDetail)
    const [content, setContent] = useState('')
    const [value, setValue] = useState(5)
    const [message, setMessage] = useState('')

    const handleOnSumbit = () => {
        setMessage('')
        if (content === '') {
            setMessage(prev => 'Invalid message')
            return;
        }
        const submitValue = {
            content: content,
            rating: value,
            productId: product.id
        }
        console.log(submitValue)
        dispatch(addReviews(submitValue))
        setContent('')
    }
    return (
        <>
            <Typography fontFamily={'Arial'} fontWeight={700} fontSize={28}>Write Review</Typography>
            {
                user.id ? <>
                    <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    />
                    <form>
                        <TextField
                            fullWidth
                            id="outlined-multiline-static"
                            label="Write Your Review..."
                            value={content}
                            multiline
                            rows={2}
                            sx={{
                                backgroundColor: '#E6E6E6'
                            }}
                            onChange={e => setContent(e.target.value)}
                        />
                        {message !== '' && <Typography color={'red'}>{message}</Typography>}
                        <LoadingButton onClick={handleOnSumbit} loading={isAddLoading} loadingPosition={'start'} color="primary" style={{ backgroundColor: '#FFD333', color: '#000000', padding: '5px 30px', marginTop: '10px', fontWeight: '700', fontSize: '16px', textTransform: 'none' }}>Post Your Review</LoadingButton>
                    </form>
                </> : <><Typography>Login before write review</Typography></>
            }

        </>

    )
}

export default WriteReview;