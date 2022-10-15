import { Button, IconButton, Link, TextField } from "@mui/material";
import React from "react";
import './index.scss'
import ShopAppComponent from "./ShopAppComponent";
import CloseIcon from '@mui/icons-material/Close';

const RegisterComponent = ({ setComponent, handleClose }) => {
    const handleLogin = () => {
        setComponent('login')
    }
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
                    <div style={{padding : '40px'}}>
                        <div className="title-auth-component">
                            Welcome to Shop App
                        </div>
                        <div>
                            <form>
                                <TextField placeholder="User Name" type={'text'} fullWidth variant="standard" style={{ margin: '10px 0px' }}/>
                                <TextField placeholder="Email@gmail.com" type={'text'} fullWidth variant="standard" style={{ margin: '10px 0px' }}/>
                                <TextField placeholder="Password" type={'password'} fullWidth variant="standard" style={{ margin: '10px 0px' }} />
                                <TextField placeholder="Confirm Password" type={'password'} fullWidth variant="standard" style={{ margin: '10px 0px' }}/>
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