import { Button, IconButton, Link, TextField, Typography } from "@mui/material";
import React from "react";
import './index.scss'
import ShopAppComponent from "./ShopAppComponent";
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from "formik";
import * as yup from "yup";
import { regexEmail } from "../../ultis/ultis";

const validationSchema = yup.object({
    email: yup
        .string("Enter your email")
        .matches(regexEmail, "Invalid Email")
        .required("Email is required"),
    code: yup
        .string("Enter code")
        .required("Code is required"),
});

const ForgotComponent = ({ setComponent, handleClose }) => {
    const handleLogin = () => {
        setComponent('login')
    }
    const handleSendCode = () => {
        console.log('send code')
    }

    const formik = useFormik({
        initialValues: {
            email: "",
            code: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleForgot(values);
        }
    });
    const myHandleChange = (event) => {
        formik.handleChange(event);
    };
    const handleForgot = (values) => {
        console.log(values)
    }
    return (
        <>
            <div className="modal-container">
                <div className="modal-right-side">
                    <div className="title-auth-component">
                        Welcome to Shop App
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit}>
                            <TextField name='email' className={'input-forgot'} placeholder="Email@gmail.com" type={'text'} fullWidth variant="standard" style={{ margin: '10px 0px' }}
                                InputProps={{
                                    endAdornment: <><Link onClick={handleSendCode} style={{ fontSize: '12px' }}>Send Code</Link></>,
                                }} onChange={myHandleChange} />
                            {formik.errors.email && <Typography style={{ color: 'red' }}>{formik.errors.email}</Typography>}
                            <TextField name='code' placeholder="Code" type={'text'} fullWidth variant="standard" style={{ margin: '10px 0px' }} onChange={myHandleChange} />
                            {formik.errors.code && <Typography style={{ color: 'red' }}>{formik.errors.code}</Typography>}
                            <Button type="primary" style={{ backgroundColor: '#FFD333', fontWeight: '700', color: '#000000' }} fullWidth>Recovery Password</Button>
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