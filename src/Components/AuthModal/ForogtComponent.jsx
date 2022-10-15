import { Button, IconButton, Link, TextField } from "@mui/material";
import React from "react";
import './index.scss'
import ShopAppComponent from "./ShopAppComponent";
import CloseIcon from '@mui/icons-material/Close';

const ForgotComponent = ({ setComponent, handleClose }) => {
    const handleLogin = () => {
        setComponent('login')
    }
    const handleSendCode = () => {
        console.log('send code')
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
                            <TextField className={'input-forgot'} placeholder="Email@gmail.com" type={'text'} fullWidth variant="standard" style={{ margin: '10px 0px' }}
                                InputProps={{
                                    endAdornment: <><Link onClick={handleSendCode} style={{ fontSize: '12px' }}>Send Code</Link></>,
                                }}/>
                            <TextField placeholder="Password" type={'password'} fullWidth variant="standard" style={{ margin: '10px 0px' }} />
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