import { Box, Modal, Typography } from "@mui/material";
import React, { useState } from "react";
import LoginComponent from "./LoginComponent";
import './index.scss'
import 'antd/dist/antd.css';
import ForgotComponent from "./ForogtComponent";
import RegisterComponent from "./RegisterComponent";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxWidth: '100%',
    bgcolor: 'background.paper',
    borderRadius: '20px',
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
    p: 0,
};

const AuthModal = ({ open, setOpen }) => {
    const [component, setComponent] = useState('login');
    const handleClose = () => {
        setComponent('login')
        setOpen(false)
    };
    const renderModal = (type) => {
        switch (type) {
            case 'login': {
                return <><LoginComponent setComponent={setComponent} handleClose={handleClose}/></>
            }
            case 'forgot': {
                return <><ForgotComponent setComponent={setComponent} handleClose={handleClose}/></>;
            }
            case 'register' :{
                return <><RegisterComponent setComponent={setComponent} handleClose={handleClose}/></>
            }
            default: return component;
        }
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {renderModal(component)}
                </Box>
            </Modal>
        </>
    )
}

export default AuthModal;