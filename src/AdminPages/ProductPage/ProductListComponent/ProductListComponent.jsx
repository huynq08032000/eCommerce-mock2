import { Button, FormControl, IconButton, InputLabel, MenuItem, Pagination, Rating, Select, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AdminCustomSeparator from "../../AdminComponents/AdminBreadCrumbsComponent/AdminCustomSeparator";
import '../../css/index.scss'
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { getAllProducts, searchProductsApi } from "../../../config/api";
import LoadingComponent from "../../../Components/LoadingComponent/LoadingComponent";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import AdminModalDelete from "../../AdminComponents/AdminModalDelete/AdminModalDelete";
const styleTyph = {
    fontSize: '20px',
    fontWeight: '400'
}
const ProductListComponent = () => {
    const navigate = useNavigate()
    const [productId, setProductId] = useState(0)
    const [open, setOpen] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [size, setSize] = useState(10)
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [image, setImage] = useState('')
    const [isDelete, setIsDelete] = useState(false)
    const fetchData = async () => {
        setLoading(true)
        try {
            if (searchInput === '') {
                const res = await axios.get(getAllProducts, {
                    params: {
                        size: size,
                        page: currentPage
                    }
                })
                setTotalPages(res.data.data.totalPages)
                setData(res.data.data.result)
            } else {
                const res = await axios.get(searchProductsApi, {
                    params: {
                        keyword: searchInput,
                        size: size,
                        page: currentPage
                    }
                })
                setTotalPages(res.data.data.products.totalPages)
                setData(res.data.data.products.result)
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    const handleSearchDebounce = useRef(_.debounce(async (value) => {
        setLoading(true)
        setCurrentPage(1)
        try {
            if (value === '') {
                const res = await axios.get(getAllProducts, {
                    params: {
                        size: size,
                        page: 1
                    }
                })
                setTotalPages(res.data.data.totalPages)
                setData(res.data.data.result)
            } else {
                const res = await axios.get(searchProductsApi, {
                    params: {
                        keyword: value,
                        size: size,
                        page: 1
                    }
                })
                setTotalPages(res.data.data.products.totalPages)
                setData(res.data.data.products.result)
            }
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }, 500)).current;

    const handleSearchInput = (e) => {
        setSearchInput(e.target.value)
        handleSearchDebounce(e.target.value)
    }
    const handleChange = (e) => {
        setCurrentPage(1)
        setSize(e.target.value)
    }
    useEffect(() => {
        fetchData()
        setIsDelete(false)
    }, [currentPage, size, isDelete])

    useEffect(() => {
        return () => {
            handleSearchDebounce.cancel();
        };
    }, [handleSearchDebounce]);
    return (
        <>
            <AdminCustomSeparator breadcums={[{ label: 'Product' }]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100%' }}>
                <Typography fontSize={35} fontWeight={600}>Product</Typography>
                <Button sx={{ backgroundColor: '#FFD333', color: '#000000', textTransform: 'none', fontSize: '20px', fontWeight: '600' }} onClick={() => navigate('/addProduct')}>New product</Button>
            </div>
            <div className="boxShadow" style={{ width: '100%', height: '70vh', marginTop: '30px', maxWidth: '100%' }}>
                <div style={{ padding: '25px 15px 20px 15px', width: '100%' }}>
                    <div style={{ border: '1.5px solid #C4C4C4', height: '51px', width: '100%', padding: '10px 15px', display: 'flex' }}>
                        <div style={{ width: '20px', marginRight: '10px' }}>
                            <SearchIcon />
                        </div>
                        <div style={{ width: '1000px', maxWidth: '100%' }}>
                            <input placeholder="Search products" value={searchInput} onChange={handleSearchInput} />
                        </div>
                    </div>
                </div>
                <div style={{ borderBottom: '2px solid #929395' }}>
                </div>
                <div className="table-container">
                    {loading ? <LoadingComponent /> : <>
                        <table>
                            <tr>
                                <th style={{ width: '5%', textAlign: 'center' }}>ID</th>
                                <th style={{ width: '20%' }}>Product</th>
                                <th style={{ width: '15%' }}>Brand</th>
                                <th style={{ width: '15%' }}>Category</th>
                                <th style={{ width: '15%' }}>Stock</th>
                                <th style={{ width: '10%' }}>Price</th>
                                <th style={{ width: '15%', textAlign: 'center' }}>Rating</th>
                                <th></th>
                            </tr>
                            {data.map((el, index) => (
                                <tr>
                                    <td style={{ width: '5%', textAlign: 'center' }}><Typography fontWeight={700} fontSize={20}>{(currentPage - 1) * size + index + 1}</Typography></td>
                                    <td style={{ width: '20%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div style={{ margin: '0 15px 0 0' }}>
                                                <img style={{ width: '60px', height: '60px', boxShadow: '0.5px 0.5px 12px rgba(0, 0, 0, 0.25)' }} src={el.images[0]?.url} />
                                            </div>
                                            <div>
                                                <Typography style={styleTyph}>{el.name}</Typography>
                                                <Typography>ID: {el.id}</Typography>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ width: '15%' }}><Typography style={styleTyph}>{el.brand}</Typography></td>
                                    <td style={{ width: '15%' }}><Typography style={styleTyph}>{el.category}</Typography></td>
                                    <td style={{ width: '10%' }}><Typography style={styleTyph}>{el.countInStock > 0 ? `${el.countInStock} items` : 'Out of stock'} </Typography></td>
                                    <td style={{ width: '10%' }}><Typography style={styleTyph}>${el.price}</Typography></td>
                                    <td style={{ width: '15%', textAlign: 'center' }}><Rating name="half-rating-read" value={el.rating} precision={0.5} readOnly /></td>
                                    <td>
                                        <Stack direction="row" alignItems="center" spacing={'1px'}>
                                            <IconButton aria-label="edit" size="small" onClick={() => navigate(`/editProduct/${el.id}`)}>
                                                <EditIcon sx={{ color: 'green' }} />
                                            </IconButton>
                                            <IconButton aria-label="delete" size="small" onClick={() => {
                                                setProductId(el.id)
                                                setOpen(true)
                                            }}>
                                                <DeleteIcon sx={{ color: 'red' }} />
                                            </IconButton>
                                        </Stack>
                                    </td>
                                </tr>
                            ))}

                        </table>
                    </>}
                </div>
                <div style={{ margin: '30px 25px', display: 'flex', justifyContent: 'space-between' }}>
                    <Pagination count={totalPages} variant="outlined" shape="rounded" onChange={(e, number) => {
                        setCurrentPage(number)
                    }} />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Typography style={styleTyph}>Items per page</Typography>
                        <FormControl >
                            <Select
                                sx={{ padding: '0', height: '25px' }}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={size}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={15}>15</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <AdminModalDelete isDelete={isDelete} setIsDelete={setIsDelete} open={open} setOpen={setOpen} productId={productId} />
            </div>
        </>
    )
}

export default ProductListComponent;