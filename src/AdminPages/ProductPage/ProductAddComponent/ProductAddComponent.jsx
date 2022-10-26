import { Autocomplete, Button, Chip, FormControl, MenuItem, Select, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AdminCustomSeparator from "../../AdminComponents/AdminBreadCrumbsComponent/AdminCustomSeparator";
import ProductCreateComponent from "./ProductCreateComponent";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import axios from "axios";
import { createProduct, getAllCategories, uploadApi } from "../../../config/api";
import { modifyLetter, regexStock } from "../../../ultis/ultis";
import LoadingComponent from "../../../Components/LoadingComponent/LoadingComponent";
import ClearIcon from '@mui/icons-material/Clear';
import { useFormik } from "formik";
import * as yup from "yup";
import { toast } from "react-toastify";
import { toastCss } from "../../../Components/StyleComponent/StyleComponent";
import axiosInstance from "../../../ultis/customAxios";
import { LoadingButton } from "@mui/lab";

const validationSchema = yup.object({
    name: yup
        .string("Enter product name")
        .required("Product name is required"),
    description: yup
        .string("Enter description")
        .required("Description name is required"),
    price: yup
        .number("Enter number")
        .min(0, "Invalid price")
        .required("Price is required"),
    brand: yup
        .string("Enter brand")
        .required("Brand is required"),
    countInStock: yup
        .string("Enter number")
        .matches(regexStock, "Stock is invalid")
        .required("Stock is required"),
});
const ProductAddComponent = () => {
    const [loadingAdd, setLoadingAdd] = useState(false)
    const [image, setImage] = useState('')
    const [valueCate, setValues] = useState([])
    const [rating, setRating] = useState(1)
    const [options, setOption] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingUpload, setLoadingUpload] = useState(false)
    const formik = useFormik({
        initialValues: {
            name: "",
            description: "",
            price: '',
            brand: '',
            countInStock: ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (valueCate.length !== 1) {
                toast.warning('Categories need to have only one value', toastCss)
                return;
            }
            if (image === '') {
                toast.warning('Image cant be empty', toastCss)
                return;
            }
            const addValues = { ...values }
            addValues.category = valueCate[0].value
            addValues.imageUrls = [image]
            addValues.rating = rating
            handleAdd(addValues)
        }
    });
    const handleAdd = async (addValues) => {
        setLoadingAdd(true)
        try {
            const res = await axiosInstance.post(createProduct, addValues)
            toast.success(res.data.message, toastCss)
            formik.resetForm()
            setImage('')
        } catch (err) {
            console.log(err)
        }
        setLoadingAdd(false)
    }
    const fetchCate = async () => {
        setLoading(true)
        try {
            const res = await axios.get(getAllCategories)
            const arrResult = res.data.data.map(el => ({
                title: modifyLetter(el),
                value: el,
            }))
            setValues([arrResult[0]])
            setOption(arrResult)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    useEffect(() => {
        fetchCate()
    }, [])

    const handleDelete = (option) => {
        const arr = valueCate.filter(el => el.value !== option.value)
        setValues(arr)
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
            <AdminCustomSeparator breadcums={[{ label: 'Product', href: '/productList' }, { label: 'Create product' }]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100%' }}>
                <Typography fontSize={35} fontWeight={600}>Create Product</Typography>
                <LoadingButton loading={loadingAdd} sx={{ backgroundColor: '#FFD333', color: '#000000', textTransform: 'none', fontSize: '20px', fontWeight: '600' }} onClick={formik.handleSubmit}>Add product</LoadingButton>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0px 25px', }}>
                <div style={{ width: '70%' }}>
                    <ProductCreateComponent label={'Basic Information'} style={{ width: '100%', height: '730px' }}>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Name</Typography>
                            <TextField
                                value={formik.values.name}
                                name='name'
                                onChange={formik.handleChange}
                                size="small"
                                fullWidth
                            />
                            {formik.errors.name && <Typography color='red'>{formik.errors.name}</Typography>}
                        </div>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Description</Typography>
                            <TextField
                                value={formik.values.description}
                                name='description'
                                onChange={formik.handleChange}
                                multiline
                                rows={3}
                                size="small"
                                fullWidth
                            />
                            {formik.errors.description && <Typography color='red'>{formik.errors.description}</Typography>}
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <div className="input-wrapper" style={{ marginBottom: '20px', width: '45%' }}>
                                <Typography fontSize={18} fontWeight={700}>Price</Typography>
                                <TextField
                                    type={'number'}
                                    value={formik.values.price}
                                    name='price'
                                    onChange={formik.handleChange}
                                    size="small"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                />
                                {formik.errors.price && <Typography color='red'>{formik.errors.price}</Typography>}
                            </div>
                            <div className="input-wrapper" style={{ marginBottom: '20px', width: '45%' }}>
                                <Typography fontSize={18} fontWeight={700}>Discount Percent</Typography>
                                <TextField
                                    size="small"
                                    fullWidth
                                />
                            </div>
                        </div>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Brand</Typography>
                            <TextField
                                value={formik.values.brand}
                                name='brand'
                                onChange={formik.handleChange}
                                size="small"
                                fullWidth
                            />
                            {formik.errors.brand && <Typography color='red'>{formik.errors.brand}</Typography>}
                        </div>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Stock Quality</Typography>
                            <TextField
                                value={formik.values.countInStock}
                                name='countInStock'
                                onChange={formik.handleChange}
                                size="small"
                                fullWidth
                            />
                            {formik.errors.countInStock && <Typography color='red'>{formik.errors.countInStock}</Typography>}
                        </div>
                    </ProductCreateComponent>
                </div>
                <div style={{ width: '27%' }}>
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
                    <ProductCreateComponent label={'Categories'} style={{ height: '184px', marginTop: '20px' }}>
                        <div className="input-wrapper" style={{ marginTop: '10px', width: '100%' }}>
                            {loading ? <><LoadingComponent /></> : <>
                                <Autocomplete
                                    multiple
                                    id="size-small-filled-multi"
                                    options={options}
                                    getOptionLabel={(option) => option.title}
                                    value={valueCate}
                                    onChange={(e, value) => setValues(value)}
                                    renderTags={(value, getTagProps) =>
                                        value.map((option, index) => (
                                            <Chip
                                                sx={{
                                                    borderRadius: '2px',
                                                    background: '#919EAB',
                                                    width: '138px',
                                                    height: '24px',
                                                    color: '#ffffff',
                                                    fontSize: '18px',
                                                    fontWeight: '500'
                                                }}
                                                icon={<ClearIcon style={{ color: '#ffffff' }} onClick={() => handleDelete(option)} />}
                                                variant="outlined"
                                                label={option?.title}
                                                size="small"
                                            />
                                        ))
                                    }
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            variant="outlined"
                                            sx={{ minHeight: "80px" }}
                                        />
                                    )}
                                />
                            </>}

                        </div>
                    </ProductCreateComponent>
                    <ProductCreateComponent label={'Rating'} style={{ height: '241px', marginTop: '20px' }}>
                        <div className="input-wrapper" style={{ marginTop: '30px', width: '100%' }}>
                            <FormControl sx={{ width: '100%' }}>
                                <Select
                                    sx={{ paddingLeft: '20px !important', width: '100%' }}
                                    fullWidth
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={rating}
                                    onChange={(e) => setRating(e.target.value)}
                                >
                                    <MenuItem value={1}>1</MenuItem>
                                    <MenuItem value={2}>2</MenuItem>
                                    <MenuItem value={3}>3</MenuItem>
                                    <MenuItem value={4}>4</MenuItem>
                                    <MenuItem value={5}>5</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </ProductCreateComponent>
                </div>
            </div>
        </>
    )
}

export default ProductAddComponent;