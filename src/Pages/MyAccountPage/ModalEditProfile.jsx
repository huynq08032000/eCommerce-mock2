import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as yup from "yup";
import { regexContact, regexEmail } from '../../ultis/ultis';
import { useFormik } from 'formik';
import axiosInstance from '../../ultis/customAxios';
import { toastCss } from '../../Components/StyleComponent/StyleComponent';
import { changeContactApi, changeEmailApi, changeUsernameApi } from '../../config/api';
import { setUser } from '../../redux/UserSlice';
import { LoadingButton } from '@mui/lab';

const validationSchema = yup.object({
    username: yup
        .string('Enter your user name')
        .required("User name is required"),
    email: yup
        .string("Enter your email")
        .matches(regexEmail, "Invalid Email")
        .required("Email is required"),
    contact: yup
        .string("Enter your contact")
        .matches(regexContact, "Invalid Contact")
        .required("Contact is required"),
});

const style = {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalEditProfile = ({ open, setOpen }) => {
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const handleClose = () => {
        formik.setValues(user)
        setOpen(false)
    }
    useEffect(() => {
        formik.setValues(user)
    }, [user])
    const formik = useFormik({
        initialValues: user,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            updateInfor(values)
        }
    });
    const updateInfor = async (values) => {
        let res;
        setLoading(true)
        if (user.username !== values.username)
            try {
                res = await axiosInstance.patch(changeUsernameApi, { username: values.username })
                toast.success(res.data.message, toastCss)
                dispatch(setUser(res.data.data))
            } catch (error) {
                toast.error(error.response.data.message, toastCss)
            }
        if (user.contact !== values.contact)
            try {
                res = await axiosInstance.patch(changeContactApi, { contact: values.contact })
                toast.success(res.data.message, toastCss)
                dispatch(setUser(res.data.data))
            } catch (error) {
                toast.error(error.response.data.message, toastCss)
            }
        if (user.email !== values.email)
            try {
                res = await axiosInstance.patch(changeEmailApi, { email: values.email })
                toast.success(res.data.message, toastCss)
                dispatch(setUser(res.data.data))
            } catch (error) {
                toast.error(error.response.data.message, toastCss)
            }
        setLoading(false)
    }
    const myHandleChange = (e) => {
        formik.handleChange(e)
    }
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update Profile Modal
                    </Typography>
                    <TextField id="outlined-basic" name={'username'} value={formik.values.username} label="User name" variant="outlined" fullWidth sx={{ margin: '10px 0' }} onChange={myHandleChange} />
                    {formik.errors.username && <Typography color={'red'}>{formik.errors.username}</Typography>}
                    <TextField id="outlined-basic" name={'email'} value={formik.values.email} label="Email" variant="outlined" fullWidth sx={{ margin: '10px 0' }} onChange={myHandleChange} />
                    {formik.errors.email && <Typography color={'red'}>{formik.errors.email}</Typography>}
                    <TextField id="outlined-basic" label="Address" variant="outlined" fullWidth sx={{ margin: '10px 0' }} value={'La Khe, Ha Dong, Hanoi'} onChange={myHandleChange} />
                    <TextField id="outlined-basic" name={'contact'} value={formik.values.contact} label="Phone" variant="outlined" fullWidth sx={{ margin: '10px 0' }} onChange={myHandleChange} />
                    {formik.errors.contact && formik.values.contact !== null && <Typography color={'red'}>{formik.errors.contact}</Typography>}
                    <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                        <Button sx={{ backgroundColor: '#C4C4C4', color: '#000000', margin: '0 10px' }} onClick={handleClose}>Cancel</Button>
                        <LoadingButton loading={loading} loadingPosition='start' sx={{ backgroundColor: 'green', color: '#fff', width: '100px' }} onClick={formik.handleSubmit}>Save</LoadingButton>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default ModalEditProfile;
