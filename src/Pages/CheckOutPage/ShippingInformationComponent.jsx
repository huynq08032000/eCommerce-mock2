import { LoadingButton } from "@mui/lab";
import { Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { toastCss } from "../../Components/StyleComponent/StyleComponent";
import { changeContactApi, changeEmailApi } from "../../config/api";
import { setUser } from "../../redux/UserSlice";
import axiosInstance from "../../ultis/customAxios";
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
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)
    const [loading, setLoading] = useState(false)
    const [edit, setEdit] = useState(false)
    const handleEdit = () => {
        setEdit(!edit)
    }
    const handleCancel = () => {
        formik.setValues(user)
        handleEdit()
    }
    const handleSave = () => {
        handleEdit()
    }
    const formik = useFormik({
        initialValues: user,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            updateInfor(values)
        }
    });
    const updateInfor = async (values) => {
        let res;
        setLoading(true)
        if (user.contact !== values.contact)
            try {
                res = await axiosInstance.patch(changeContactApi, { contact: values.contact })
                toast.success(res.data.message, toastCss)
                dispatch(setUser(res.data.data))
            } catch (error) {
                toast.error(error.response.data.message, toastCss)
            }
        if (user.email !== values.email)
            try {
                res = await axiosInstance.patch(changeEmailApi, { email: values.email })
                toast.success(res.data.message, toastCss)
                dispatch(setUser(res.data.data))
            } catch (error) {
                toast.error(error.response.data.message, toastCss)
            }
        setLoading(false)
        handleEdit()
    }
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
                        <TextField fontSize={14} value={formik.values.contact} fullWidth name='contact' onChange={(e) => {
                            // setCloneUser({ ...cloneUser, contact: e.target.value })
                            formik.handleChange(e)
                        }}></TextField>
                        {formik.errors.contact && formik.values.contact !== null && <Typography color={'red'}>{formik.errors.contact}</Typography>}
                    </div>
                    <div style={{ margin: '10px 0px' }}>
                        <Typography fontSize={14} fontWeight={700}>Email Adress</Typography>
                        <TextField fontSize={14} value={formik.values.email} fullWidth name='email'
                            onChange={(e) => {
                                formik.handleChange(e)
                                // setCloneUser({ ...cloneUser, email: e.target.value })
                            }}
                        ></TextField>
                        {formik.errors.email && <Typography color={'red'}>{formik.errors.email}</Typography>}
                    </div>

                    <div className="shipping-btn" >
                        <Button sx={{ textTransform: 'none', padding: '10px 0px', color: 'red' }} onClick={handleCancel}>Cancel</Button>
                        <LoadingButton loadingPosition="start" loading={loading} sx={{ textTransform: 'none', padding: '10px 0px', color: 'green', width: '100px' }} onClick={formik.handleSubmit}>Save</LoadingButton>
                    </div>
                </>}


            </div>

        </>
    )
}

export default ShippingInformationComponent;