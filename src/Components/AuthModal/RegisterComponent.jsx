import { Button, IconButton, Link, TextField, Typography } from "@mui/material";
import React from "react";
import './index.scss'
import ShopAppComponent from "./ShopAppComponent";
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from "formik";
import * as yup from "yup";
import { regexEmail } from "../../ultis/ultis";

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Your name is required'),
    email: yup
        .string("Enter your email")
        .matches(regexEmail, "Invalid Email")
        .required("Email is required"),
    password: yup
        .string("Enter your password")
        .min(4, "Password should be of minimum 4 characters length")
        .required("Password is required"),
    confirmPassword: yup
        .string('Enter your confirm password')
        .required('Confirm password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});

const RegisterComponent = ({ setComponent, handleClose }) => {
    const handleLogin = () => {
        setComponent('login')
    }
    const formik = useFormik({
        initialValues: {
            name: '',
            email: "",
            password: "",
            confirmPassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            handleRegister(values);
        }
    });
    const handleRegister = (values) => {
        console.log(values)
    }
    const myHandleChange = (event) => {
        formik.handleChange(event);
    };
    return (
        <>
            <div className="modal-container">
                <div className="modal-right-side title-auth-component" style={{ backgroundColor: '#FAF096' }}>
                    <ShopAppComponent />
                </div>
                <div className="modal-left-side">
                    <div className="close-btn">
                        <IconButton onClick={handleClose}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <div style={{ padding: '40px' }}>
                        <div className="title-auth-component">
                            Welcome to Shop App
                        </div>
                        <div>
                            <form onSubmit={formik.handleSubmit}>
                                <TextField name='name' placeholder="User Name" type={'text'} fullWidth variant="standard" style={{ margin: '10px 0px' }} onChange={myHandleChange} />
                                {formik.errors.name && <Typography style={{ color: 'red' }}>{formik.errors.name}</Typography>}
                                <TextField name='email' placeholder="Email@gmail.com" type={'text'} fullWidth variant="standard" style={{ margin: '10px 0px' }} onChange={myHandleChange} />
                                {formik.errors.email && <Typography style={{ color: 'red' }}>{formik.errors.email}</Typography>}
                                <TextField name='password' placeholder="Password" type={'password'} fullWidth variant="standard" style={{ margin: '10px 0px' }} onChange={myHandleChange} />
                                {formik.errors.password && <Typography style={{ color: 'red' }}>{formik.errors.password}</Typography>}
                                <TextField name='confirmPassword' placeholder="Confirm Password" type={'password'} fullWidth variant="standard" style={{ margin: '10px 0px' }} onChange={myHandleChange} />
                                {formik.errors.confirmPassword && <Typography style={{ color: 'red' }}>{formik.errors.confirmPassword}</Typography>}
                                <Button type="primary" style={{ backgroundColor: '#FFD333', fontWeight: '700', color: '#000000' }} fullWidth>Register</Button>
                            </form>
                        </div>
                        <div className="footer" onClick={handleLogin}>
                            Login
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default RegisterComponent;