import { Button, IconButton, Link, TextField } from "@mui/material";
import React from "react";
import './index.scss'
import ShopAppComponent from "./ShopAppComponent";
import CloseIcon from '@mui/icons-material/Close';

const LoginComponent = ({ setComponent, handleClose}) => {
    const handleForgot = () => {
        setComponent('forgot')
    }
    const handleRegister = () => {
        setComponent('register')
    }
    return (
        <>
            <div className="modal-container">
                <div className="modal-right-side">
                    <div className="title-auth-component">
                        Welcome to Shop App
                    </div>
                    <div>
                        <form>
                            <TextField placeholder="Email@gmail.com" type={'text'} fullWidth variant="standard" style={{ margin: '10px 0px' }} />
                            <TextField placeholder="Password" type={'password'} fullWidth variant="standard" style={{ margin: '10px 0px' }}
                                InputProps={{
                                    endAdornment: <><Link onClick={handleForgot} style={{ fontSize: '12px' }}>Forgot?</Link></>,
                                }} />
                            <Button type="primary" style={{ backgroundColor: '#FFD333', fontWeight: '700', color: '#000000' }} fullWidth>Login</Button>
                        </form>
                    </div>
                    <div className="footer" onClick={handleRegister}>
                        Create An Account
                    </div>
                </div>
                <div className="modal-left-side title-auth-component" style={{ backgroundColor: '#FAF096' }}>
                    <div className="close-btn">
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>
                    <div style={{marginTop : '40px'}}>
                        <ShopAppComponent />
                    </div>
                </div>
            </div>
        </>
    )
}
export default LoginComponent;