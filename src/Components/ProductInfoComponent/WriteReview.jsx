import { LoadingButton } from "@mui/lab";
import { Rating, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const WriteReview = () => {

    const { user } = useSelector(state => state.user)
    const { product, isPostReview } = useSelector(state => state.productDetail)
    const [value, setValue] = useState(5)
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
                            multiline
                            rows={2}
                            sx={{
                                backgroundColor: '#E6E6E6'
                            }}
                        />
                        <LoadingButton loading={isPostReview} loadingPosition={'start'} color="primary" style={{ backgroundColor: '#FFD333', color: '#000000', padding: '5px 30px', marginTop: '10px', fontWeight: '700', fontSize: '16px' }}>Post Your Review</LoadingButton>
                    </form>
                </> : <><Typography>Login before write review</Typography></>
            }

        </>

    )
}

export default WriteReview;