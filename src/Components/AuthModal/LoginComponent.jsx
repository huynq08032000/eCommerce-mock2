import { IconButton, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import './index.scss'
import ShopAppComponent from "./ShopAppComponent";
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from "formik";
import * as yup from "yup";
import { regexEmail } from "../../ultis/ultis";
import { LoadingButton } from "@mui/lab";
import axios from "axios";
import { apiLogin } from "../../config/api";
import { Alert } from "antd";

const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .matches(regexEmail, "Invalid Email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(4, "Password should be of minimum 4 characters length")
        .required("Password is required")
});

const LoginComponent = ({ setComponent, handleClose }) => {
    const handleForgot = () => {
        setComponent('forgot')
    }
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState({ type: '', message: '' })

    const handleRegister = () => {
        setComponent('register')
    }
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleLogin(values);
        }
    });
    const handleLogin = async (values) => {
        const formValues = {
            email: values.email,
            password: values.password,
            deviceId: 'deviceId-' + values.email
        }
        setLoading(true)
        try {
            const res = await axios.post(apiLogin, formValues)
            console.log(res.data.data)
        } catch (error) {
            console.log(error.response.data.message)
            setMessage({ ...message, type: 'error', message: error.response.data.message })
        }
        setLoading(false)
    }
    const myHandleChange = (e) => {
        formik.handleChange(e)
    }
    return (
        <>
            <div className="modal-container">
                <div className="modal-right-side">
                    <div className="title-auth-component">
                        Welcome to Shop App
                    </div>
                    {message.message !== '' && <Alert
                        description={message.message}
                        type={message.type}
                        showIcon
                    />}
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField placeholder="Email@gmail.com" type={'text'} fullWidth variant="standard" style={{ margin: '10px 0px' }} name='email' onChange={myHandleChange} />
                            {formik.errors.email && <Typography style={{ color: 'red' }}>{formik.errors.email}</Typography>}
                            <TextField placeholder="Password" type={'password'} fullWidth variant="standard" style={{ margin: '10px 0px' }} name='password' onChange={myHandleChange}
                                InputProps={{
                                    endAdornment: <><Link onClick={handleForgot} style={{ fontSize: '12px' }}>Forgot?</Link></>,
                                }} />
                            {formik.errors.password && <Typography style={{ color: 'red' }}>{formik.errors.password}</Typography>}
                            <LoadingButton type="primary" style={{ backgroundColor: '#FFD333', fontWeight: '700', color: '#000000' }} loading={loading} loadingPosition={'start'} fullWidth >Login</LoadingButton>
                        </form>
                    </div>
                    <div className="footer" onClick={handleRegister}>
                        Create An Account
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
export default LoginComponent;