import { Button, Link, TextField } from "@mui/material";
import React from "react";
import './index.scss'
import ShopAppComponent from "./ShopAppComponent";
import InputAdornment from '@mui/material/InputAdornment';

const LoginComponent = () => {
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
                                    endAdornment: <><Link>Forgot?</Link></>,
                                }}/>
                            <Button type="primary" style={{ backgroundColor: '#FFD333', fontWeight: '700', color: '#000000' }} fullWidth>Login</Button>
                        </form>
                    </div>
                </div>
                <div className="modal-left-side title-auth-component" style={{ backgroundColor: '#FAF096' }}>
                    <ShopAppComponent />
                </div>
            </div>
        </>
    )
}
export default LoginComponent;