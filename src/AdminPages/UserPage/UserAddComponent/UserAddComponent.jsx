import { Button, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import AdminCustomSeparator from "../../AdminComponents/AdminBreadCrumbsComponent/AdminCustomSeparator";
import ProductCreateComponent from "../../ProductPage/ProductAddComponent/ProductCreateComponent";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { createProduct, createUser, uploadApi } from "../../../config/api";
import LoadingComponent from "../../../Components/LoadingComponent/LoadingComponent";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { toastCss } from "../../../Components/StyleComponent/StyleComponent";
import axiosInstance from "../../../ultis/customAxios";
import { LoadingButton } from "@mui/lab";
import { regexContact, regexEmail } from "../../../ultis/ultis";

const validationSchema = yup.object({
    username: yup
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
    rePassword: yup
        .string('Enter your confirm password')
        .required('Confirm password is required')
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
    contact: yup
        .string("Enter your contact")
        .matches(regexContact, "Invalid contact")
});
const UserAddComponent = () => {
    const [role, setRole] = useState('admin')
    const [status, setStatus] = useState(true)
    const [verifyEmail, setVerifyEmail] = useState(false)
    const [loadingAdd, setLoadingAdd] = useState(false)
    const [image, setImage] = useState('')
    const [loadingUpload, setLoadingUpload] = useState(false)
    const [verifyContact, setVerifyContact] = useState(false)
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            rePassword: '',
            contact: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const addValues = { ...values }
            if (image !== '') {
                addValues.avatar = image
            }
            addValues.role = role
            addValues.isEmailVerified = verifyEmail
            addValues.isContactVerified = verifyContact
            addValues.isActive = status
            handleAdd(addValues)
        }
    });
    const handleAdd = async (addValues) => {
        delete addValues.rePassword
        if (addValues.contact === '') delete addValues.contact
        setLoadingAdd(true)
        try {
            const res = await axiosInstance.post(createUser, addValues)
            toast.success(res.data.message, toastCss)
            formik.resetForm()
            setStatus(true)
            setVerifyEmail(false)
            setVerifyContact(false)
            setImage('')
        } catch (error) {
            toast.error(error.response.data.message, toastCss)
        }
        setLoadingAdd(false)
    }
    const handleUploadFile = async (e) => {
        setLoadingUpload(true)
        let formData = new FormData()
        formData.append('image', e.target.files[0], e.target.files[0].name)
        try {
            const res = await axiosInstance.post(uploadApi, formData, {
                headers: { "Content-Type": "multipart/form-data" }
            })
            setImage(res.data.data.imageURL)
            toast.success(res.data.message, toastCss)
        } catch (error) {
            console.log(error)
        }
        setLoadingUpload(false)
    }
    return (
        <>
            <AdminCustomSeparator breadcums={[{ label: 'User', href: '/userList' }, { label: 'Create User' }]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100%' }}>
                <Typography fontSize={35} fontWeight={600}>Create Product</Typography>
                <LoadingButton loading={loadingAdd} sx={{ backgroundColor: '#FFD333', color: '#000000', textTransform: 'none', fontSize: '20px', fontWeight: '600' }} onClick={formik.handleSubmit}>Add User</LoadingButton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0px 25px', }}>
                <div style={{width : '70%'}}>
                    <ProductCreateComponent label={'Basic Information'} style={{ height: '730px' }}>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Name</Typography>
                            <TextField
                                value={formik.values.username}
                                name='username'
                                onChange={formik.handleChange}
                                size="small"
                                fullWidth
                            />
                            {formik.errors.username && <Typography color='red'>{formik.errors.username}</Typography>}
                        </div>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Email</Typography>
                            <TextField
                                value={formik.values.email}
                                name='email'
                                onChange={formik.handleChange}
                                size="small"
                                fullWidth
                            />
                            {formik.errors.email && <Typography color='red'>{formik.errors.email}</Typography>}
                        </div>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Password</Typography>
                            <TextField
                                type='password'
                                value={formik.values.password}
                                name='password'
                                onChange={formik.handleChange}
                                size="small"
                                fullWidth
                            />
                            {formik.errors.password && <Typography color='red'>{formik.errors.password}</Typography>}
                        </div>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Retype password</Typography>
                            <TextField
                                type='password'
                                name='rePassword'
                                value={formik.values.rePassword}
                                onChange={formik.handleChange}
                                size="small"
                                fullWidth
                            />
                            {formik.errors.rePassword && <Typography color='red'>{formik.errors.rePassword}</Typography>}
                        </div>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Role</Typography>
                            <FormControl sx={{ width: '100%' }}>
                                <Select
                                    sx={{ padding: '0', width: '100%' }}
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                >
                                    <MenuItem value={'admin'}>Admin</MenuItem>
                                    <MenuItem value={'user'}>User</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </ProductCreateComponent>
                </div>
                <div style={{width : '27%'}}>
                    <ProductCreateComponent label={'Images'} style={{ height: '260px' }}>
                        <div style={{ height: '100px', textAlign: 'center' }}>
                            {loadingUpload ? <><LoadingComponent /></> : <>
                                {image === '' ? <UploadFileIcon sx={{ height: '92px', width: '77px' }} /> : <>
                                    <img style={{ height: '100px', width: '100px' }} src={`${image}`} />
                                </>}
                            </>}
                        </div>
                        <div className="input-wrapper" style={{ marginTop: '30px', width: '100%', border: '1px solid #929395', borderRadius: '2px' }}>
                            <Button variant="contained" component="label" sx={{ borderRadius: '2px', background: '#C4CDD5' }}>
                                Upload
                                <input hidden accept="image/*" multiple type="file" onChange={handleUploadFile} />
                            </Button>
                        </div>
                    </ProductCreateComponent>
                    <ProductCreateComponent label={'Another Infor'} style={{ marginTop: '15px', height : '455px' }}>
                        <div className="input-wrapper" style={{ marginTop: '10px', width: '100%' }}>
                            <Typography fontSize={18} fontWeight={700}>Contact</Typography>
                            <TextField
                                name='contact'
                                value={formik.values.contact}
                                onChange={formik.handleChange}
                                size="small"
                                fullWidth
                            />
                            {formik.errors.contact && <Typography color='red'>{formik.errors.contact}</Typography>}
                        </div>
                        <div className="input-wrapper" style={{ marginTop: '10px', width: '100%', display: 'flex', alignItems: 'center' }}>
                            <Typography fontSize={18} fontWeight={500} width={150}>Status</Typography>
                            <FormControl >
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                >
                                    <FormControlLabel value={true} control={<Radio />} label="Active" style={{ width: '100px' }} />
                                    <FormControlLabel value={false} control={<Radio />} label="Disabled" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="input-wrapper" style={{ marginTop: '10px', width: '100%', display: 'flex', alignItems: 'center' }}>
                            <Typography fontSize={18} fontWeight={500} width={150}>Verify Email</Typography>
                            <FormControl >
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={verifyEmail}
                                    onChange={(e) => setVerifyEmail(e.target.value)}
                                >
                                    <FormControlLabel value={true} control={<Radio />} label="Yes" style={{ width: '100px' }} />
                                    <FormControlLabel value={false} control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <div className="input-wrapper" style={{ marginTop: '10px', width: '100%', display: 'flex', alignItems: 'center' }}>
                            <Typography fontSize={18} fontWeight={500} width={150}>Verify Contact</Typography>
                            <FormControl >
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    name="row-radio-buttons-group"
                                    value={verifyContact}
                                    onChange={(e) => setVerifyContact(e.target.value)}
                                >
                                    <FormControlLabel value={true} control={<Radio />} label="Yes" style={{ width: '100px' }} />
                                    <FormControlLabel value={false} control={<Radio />} label="No" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </ProductCreateComponent>
                </div>
            </div>
        </>
    )
}

export default UserAddComponent;