import { Avatar, Button, FormControl, FormControlLabel, MenuItem, Radio, RadioGroup, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AdminCustomSeparator from "../../AdminComponents/AdminBreadCrumbsComponent/AdminCustomSeparator";
import ProductCreateComponent from "../../ProductPage/ProductAddComponent/ProductCreateComponent";
import { getUserByID, updateUser, uploadApi } from "../../../config/api";
import LoadingComponent from "../../../Components/LoadingComponent/LoadingComponent";
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { toastCss } from "../../../Components/StyleComponent/StyleComponent";
import axiosInstance from "../../../ultis/customAxios";
import { LoadingButton } from "@mui/lab";
import { regexContact, regexEmail } from "../../../ultis/ultis";
import { useParams } from "react-router-dom";

const validationSchema = yup.object({
    username: yup
        .string('Enter your name')
        .required('Your name is required'),
    email: yup
        .string("Enter your email")
        .matches(regexEmail, "Invalid Email")
        .required("Email is required"),
    contact: yup
        .string("Enter your contact")
        .matches(regexContact, "Invalid contact")
});
const UserEditComponent = () => {
    const { id } = useParams()
    const [role, setRole] = useState('admin')
    const [status, setStatus] = useState(true)
    const [verifyEmail, setVerifyEmail] = useState(false)
    const [loadingAdd, setLoadingAdd] = useState(false)
    const [image, setImage] = useState('')
    const [loadingUpload, setLoadingUpload] = useState(false)
    const [verifyContact, setVerifyContact] = useState(false)
    const [loading, setLoading] = useState(false)
    const emailCurrent = useRef()
    const contactCurrent = useRef()
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
            const addValues = {
                username: values.username,
                email: values.email,
                role: role,
                isEmailVerified: verifyEmail,
                isContactVerified: verifyContact,
                isActive: status,
                contact: values.contact
            }
            if (addValues.contact === '') delete addValues.contact
            if (emailCurrent.current === values.email) delete addValues.email
            if (contactCurrent.current === values.contact) delete addValues.contact
            if (image !== '' && image != null) addValues.avatar = image
            handleUpdate(addValues)
        }
    });
    const handleUpdate = async (addValues) => {
        setLoadingAdd(true)
        try {
            const res = await axiosInstance.patch(updateUser + id, addValues)
            toast.success(res.data.message, toastCss)
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
    const fetchUser = async () => {
        setLoading(true)
        try {
            const res = await axiosInstance.get(getUserByID + id)
            const result = res.data.data
            if (result.contact === null) result.contact = ''
            formik.setValues(result)
            emailCurrent.current = result.email
            contactCurrent.current = result.contact
            setImage(res.data.data.avatar)
            setStatus(res.data.data.isActive)
            setVerifyEmail(res.data.data.isEmailVerified)
            setVerifyContact(res.data.data.isContactVerified)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchUser()
    }, [id])
    return (
        <>
            {
                loading ? <LoadingComponent /> : <>
                    <AdminCustomSeparator breadcums={[{ label: 'User', href: '/userList' }, { label: `Update User #${id}` }]} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100%' }}>
                        <Typography fontSize={35} fontWeight={600}>Update User #{id}</Typography>
                        <LoadingButton loading={loadingAdd} sx={{ backgroundColor: '#FFD333', color: '#000000', textTransform: 'none', fontSize: '20px', fontWeight: '600' }} onClick={formik.handleSubmit}>Update User</LoadingButton>
                    </div>
                    <div>
                        <Typography fontFamily={'Work Sans'} fontWeight={500} fontSize={16} color={'#929395'}>User ID : {id}</Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px 0px 25px', }}>
                        <div>
                            <ProductCreateComponent label={'Basic Information'} style={{ width: '676px', height: '730px' }}>
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
                                        style={{ background: '#C4C4C4' }}
                                        disabled
                                        type='password'
                                        // value={formik.values.password}
                                        name='password'
                                        onChange={formik.handleChange}
                                        size="small"
                                        fullWidth
                                    />
                                </div>
                                <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                                    <Typography fontSize={18} fontWeight={700}>Retype password</Typography>
                                    <TextField
                                        style={{ background: '#C4C4C4' }}
                                        disabled
                                        type='password'
                                        name='rePassword'
                                        // value={formik.values.rePassword}
                                        onChange={formik.handleChange}
                                        size="small"
                                        fullWidth
                                    />
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
                        <div>
                            <ProductCreateComponent label={'Images'} style={{ width: '431px', height: '260px' }}>
                                <div style={{ height: '100px', display: 'flex', justifyContent: 'center' }}>
                                    {loadingUpload ? <LoadingComponent /> : <>
                                        <Avatar style={{ height: '100px', width: '100px', boxShadow: '0.5px 0.5px 12px rgba(0, 0, 0, 0.25)', borderRadius: '0' }} src={image} />
                                    </>}

                                </div>
                                <div className="input-wrapper" style={{ marginTop: '30px', width: '100%', border: '1px solid #929395', borderRadius: '2px' }}>
                                    <Button variant="contained" component="label" sx={{ borderRadius: '2px', background: '#C4CDD5' }}>
                                        Upload
                                        <input hidden accept="image/*" multiple type="file" onChange={handleUploadFile} />
                                    </Button>
                                </div>
                            </ProductCreateComponent>
                            <ProductCreateComponent label={'Another Infor'} style={{ width: '431px', height: '458px', marginTop: '15px' }}>
                                <div className="input-wrapper" style={{ marginTop: '10px', width: '100%' }}>
                                    <Typography fontSize={18} fontWeight={700}>Contact</Typography>
                                    <TextField
                                        name='contact'
                                        value={formik.values.contact}
                                        onChange={formik.handleChange}
                                        size="small"
                                        fullWidth
                                    />
                                    {formik.errors.contact && formik.values.contact !== null && <Typography color='red'>{formik.errors.contact}</Typography>}
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
            }

        </>
    )
}

export default UserEditComponent;