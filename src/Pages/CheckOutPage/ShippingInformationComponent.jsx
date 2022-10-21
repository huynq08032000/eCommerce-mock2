import { Button, TextField, Typography } from "@mui/material";
import _ from "lodash";
import React, { useState } from "react";
import { useSelector } from "react-redux";

const ShippingInformationComponent = () => {
    const { user } = useSelector(state => state.user)
    const cloneUser = _.cloneDeep(user)
    console.log(cloneUser)
    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!edit)
    }
    return (
        <>
            <div className="shipping-container" style={{ padding: '10px', borderRadius: '5px', border: '1px solid rgba(90, 90, 90, 0.4)' }}>
                {edit === false ? <>
                    <Typography fontWeight={700} fontSize={24}>Shipping Information</Typography>
                    <Typography fontSize={14}>La Khe, Ha Dong, Hanoi</Typography>
                    <div style={{ margin: '10px 0px' }}>
                        <Typography fontSize={14} fontWeight={700}>Phone Number</Typography>
                        <Typography fontSize={14}>0929098789</Typography>
                    </div>
                    <div style={{ margin: '10px 0px' }}>
                        <Typography fontSize={14} fontWeight={700}>Email Adress</Typography>
                        <Typography fontSize={14}>{user.email}</Typography>
                    </div>

                    <div className="shipping-btn">
                        <Button sx={{ textTransform: 'none', padding: '10px 0px' }} onClick={handleEdit}>Edit Address</Button>
                    </div>

                </> : <>
                    <Typography fontWeight={700} fontSize={24}>Shipping Information</Typography>
                    <TextField fontSize={14} value={'La Khe, Ha Dong, Hanoi'} fullWidth></TextField>
                    <div style={{ margin: '10px 0px' }}>
                        <Typography fontSize={14} fontWeight={700}>Phone Number</Typography>
                        <TextField fontSize={14} value={'0929098789'} fullWidth></TextField>
                    </div>
                    <div style={{ margin: '10px 0px' }}>
                        <Typography fontSize={14} fontWeight={700}>Email Adress</Typography>
                        <Typography fontSize={14}>{user.email}</Typography>
                    </div>

                    <div className="shipping-btn" >
                        <Button sx={{ textTransform: 'none', padding: '10px 0px', color: 'red' }} onClick={handleEdit}>Cancel</Button>
                        <Button sx={{ textTransform: 'none', padding: '10px 0px', color: 'green' }} onClick={handleEdit}>Save</Button>
                    </div>
                </>}


            </div>

        </>
    )
}

export default ShippingInformationComponent;