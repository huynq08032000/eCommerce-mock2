import { Box, Modal, Typography } from "@mui/material";
import React from "react";
import LoginComponent from "./LoginComponent";
import './index.scss'
import 'antd/dist/antd.css';

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    maxWidth : '100%',
    bgcolor: 'background.paper',
    borderRadius : '20px',
    boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)',
    p: 0,
};

const AuthModal = ({ open, setOpen }) => {
    const handleClose = () => setOpen(false);

    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <LoginComponent/>
                </Box>
            </Modal>
        </>
    )
}

export default AuthModal;