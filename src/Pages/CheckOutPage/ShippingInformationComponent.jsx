import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import _ from "lodash";
import { set } from "lodash";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import * as yup from "yup";
import { regexContact, regexEmail } from "../../ultis/ultis";

const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .matches(regexEmail, "Invalid Email")
        .required("Email is required"),
    contact: yup
        .string("Enter your contact")
        .matches(regexContact, "Invalid Contact")
        .required("Contact is required"),
});

const ShippingInformationComponent = () => {
    const { user } = useSelector(state => state.user)
    const [cloneUser, setCloneUser] = useState(_.cloneDeep(user))
    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!edit)
    }
    const handleCancel = () => {
        setCloneUser(_.cloneDeep(user))
        handleEdit()
    }
    const handleSave = () => {
        handleEdit()
    }
    const formik = useFormik({
        initialValues: cloneUser,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    });
    useEffect(() => {
        formik.setValues(cloneUser)
    }, [cloneUser])
    return (
        <>
            <div className="shipping-container" style={{ padding: '10px', borderRadius: '5px', border: '1px solid rgba(90, 90, 90, 0.4)' }}>
                {edit === false ? <>
                    <Typography fontWeight={700} fontSize={24}>Shipping Information</Typography>
                    <Typography fontSize={14}>La Khe, Ha Dong, Hanoi</Typography>
                    <div style={{ margin: '10px 0px' }}>
                        <Typography fontSize={14} fontWeight={700}>Phone Number</Typography>
                        <Typography fontSize={14}>{user.contact}</Typography>
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
                        <TextField fontSize={14} value={formik.values.contact} fullWidth onChange={(e) => {
                            setCloneUser({ ...cloneUser, contact: e.target.value })
                        }}></TextField>
                        {formik.errors.contact && <Typography color={'red'}>{formik.errors.contact}</Typography>}
                    </div>
                    <div style={{ margin: '10px 0px' }}>
                        <Typography fontSize={14} fontWeight={700}>Email Adress</Typography>
                        <TextField fontSize={14} value={formik.values.email} fullWidth
                            onChange={(e) => {
                                setCloneUser({ ...cloneUser, email: e.target.value })
                            }}
                        ></TextField>
                        {formik.errors.email && <Typography color={'red'}>{formik.errors.email}</Typography>}
                    </div>

                    <div className="shipping-btn" >
                        <Button sx={{ textTransform: 'none', padding: '10px 0px', color: 'red' }} onClick={handleCancel}>Cancel</Button>
                        <Button sx={{ textTransform: 'none', padding: '10px 0px', color: 'green' }} onClick={formik.handleSubmit}>Save</Button>
                    </div>
                </>}


            </div>

        </>
    )
}

export default ShippingInformationComponent;