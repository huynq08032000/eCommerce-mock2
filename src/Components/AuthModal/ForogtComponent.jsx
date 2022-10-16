import { Button, IconButton, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import './index.scss'
import ShopAppComponent from "./ShopAppComponent";
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from "formik";
import * as yup from "yup";
import { regexEmail } from "../../ultis/ultis";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { apiForgot } from "../../config/api";
import { Alert } from "antd";

const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .matches(regexEmail, "Invalid Email")
        .required("Email is required"),
    // code: yup
    //     .string("Enter code")
    //     .required("Code is required"),
});

const ForgotComponent = ({ setComponent, handleClose }) => {
    const handleLogin = () => {
        setComponent('login')
    }
    const handleSendCode = () => {
        console.log('send code')
    }
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ type: '', message: '' })
    const formik = useFormik({
        initialValues: {
            email: "",
            // code: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleForgot(values);
        }
    });
    const myHandleChange = (event) => {
        formik.handleChange(event);
    };
    const handleForgot = async (values) => {
        setLoading(true)
        try {
            const res = await axios.post(apiForgot, values)
            setMessage({ ...message, type: 'success', message: res.data.message })
        } catch (error) {
            setMessage({ ...message, type: 'error', message: error.response.data.message })
        }
        setLoading(false)
    }
    return (
        <>
            <div className="modal-container">
                <div className="modal-right-side">
                    <div className="title-auth-component">
                        Forgot Password?
                    </div>
                    <div>
                        Please enter your email to recover your password
                    </div>
                    {message.message !== '' && <Alert
                        description={message.message}
                        type={message.type}
                        showIcon
                    />}
                    <div>
                        <form onSubmit={formik.handleSubmit} style={{marginTop : '20px'}}>
                            <TextField name='email' className={'input-forgot'} placeholder="Email@gmail.com" type={'text'} fullWidth variant="standard" style={{ margin: '10px 0px' }}
                                // InputProps={{
                                //     endAdornment: <><Link onClick={handleSendCode} style={{ fontSize: '12px' }}>Send Code</Link></>,
                                // }}
                                onChange={myHandleChange} />
                            {formik.errors.email && <Typography style={{ color: 'red' }}>{formik.errors.email}</Typography>}
                            {/* <TextField name='code' placeholder="Code" type={'text'} fullWidth variant="standard" style={{ margin: '10px 0px' }} onChange={myHandleChange} />
                            {formik.errors.code && <Typography style={{ color: 'red' }}>{formik.errors.code}</Typography>} */}
                            <LoadingButton type="primary" style={{ backgroundColor: '#FFD333', fontWeight: '700', color: '#000000' }} fullWidth loading={loading} loadingPosition='start'>Recovery Password</LoadingButton>
                        </form>
                    </div>
                    <div className="footer" onClick={handleLogin}>
                        Login
                    </div>
                </div>
                <div className="modal-left-side title-auth-component" style={{ backgroundColor: '#FAF096' }}>
                    <div className="close-btn">
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div style={{ marginTop: '40px' }}>
                        <ShopAppComponent />
                    </div>
                </div>
            </div>
        </>
    )
}
export default ForgotComponent;