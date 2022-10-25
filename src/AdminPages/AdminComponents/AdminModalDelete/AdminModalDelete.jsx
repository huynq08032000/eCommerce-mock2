import React, { useState } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { LoadingButton } from "@mui/lab";
import axiosInstance from "../../../ultis/customAxios";
import { deleteProduct } from "../../../config/api";
import { toast } from "react-toastify";
import { toastCss } from "../../../Components/StyleComponent/StyleComponent";

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 663,
    height: 221,
    bgcolor: '#FFFFFF',
    border: '5px',
    boxShadow: '5px 5px 15px 2px rgba(0, 0, 0, 0.5)',
};

const AdminModalDelete = ({ isDelete, setIsDelete, open, setOpen, productId }) => {
    const handleClose = () => setOpen(false);
    const [loadingDelete, setLoadingDelete] = useState(false)
    const handleDelete = async () => {
        setLoadingDelete(true)
        try {
            const res = await axiosInstance.delete(deleteProduct + productId)
            toast.success(res.data.message, toastCss)
            setIsDelete(true)
            handleClose()
        } catch (error) {
            console.log(error)
        }
        setLoadingDelete(false)

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
                    <div className="modal-title" style={{ display: 'flex', padding: '10px 20px', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div><Typography fontWeight={700} fontSize={25}>Cornfirm Delete</Typography></div>
                        <div>
                            <IconButton onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    </div>
                    <div style={{ borderBottom: '1px solid #929395' }}>
                    </div>
                    <div style={{ padding: '10px 20px', height: 100 }}>
                        <Typography fontSize={24}>Are you sure to delete product #{productId} ?</Typography>
                    </div>
                    <div style={{ borderBottom: '1px solid #929395' }}>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
                        <Stack direction="row" alignItems="center" spacing={'10px'}>
                            <Button onClick={handleClose} sx={{ background: '#C4C4C4', fontSize: '18px', textTransform: 'none', color: '#000000', height: '38px' }}>Cancel</Button>
                            <LoadingButton loading={loadingDelete} sx={{ background: '#F02020', fontSize: '18px', textTransform: 'none', color: '#ffffff', height: '38px' }} onClick={handleDelete}>Delete</LoadingButton>
                        </Stack>
                    </div>
                </Box>
            </Modal>
        </>
    )
}

export default AdminModalDelete;