import { Avatar, Button, FormControl, IconButton, MenuItem, Pagination, Rating, Select, Stack, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import AdminCustomSeparator from "../../AdminComponents/AdminBreadCrumbsComponent/AdminCustomSeparator";
import '../../css/index.scss'
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from "axios";
import { getAllProducts, queryUser, searchProductsApi } from "../../../config/api";
import LoadingComponent from "../../../Components/LoadingComponent/LoadingComponent";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import AdminModalDelete from "../../AdminComponents/AdminModalDelete/AdminModalDelete";
import axiosInstance from "../../../ultis/customAxios";
import { colorWithRole, modifyLetter } from "../../../ultis/ultis";
const styleTyph = {
    fontSize: '20px',
    fontWeight: '400'
}
const UserListComponent = () => {
    const navigate = useNavigate()
    const [productId, setProductId] = useState(0)
    const [open, setOpen] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [size, setSize] = useState(10)
    const [totalPages, setTotalPages] = useState(1)
    const [currentPage, setCurrentPage] = useState(1)
    const [isDelete, setIsDelete] = useState(false)
    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await axiosInstance.get(queryUser, {
                params: {
                    size: size,
                    page: currentPage
                }
            })
            setTotalPages(res.data.data.totalPages)
            setData(res.data.data.result)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    const handleSearchDebounce = useRef(_.debounce(async (value) => {
        // setLoading(true)
        // setCurrentPage(1)
        // try {
        //     if (value === '') {
        //         const res = await axios.get(getAllProducts, {
        //             params: {
        //                 size: size,
        //                 page: 1
        //             }
        //         })
        //         setTotalPages(res.data.data.totalPages)
        //         setData(res.data.data.result)
        //     } else {
        //         const res = await axios.get(searchProductsApi, {
        //             params: {
        //                 keyword: value,
        //                 size: size,
        //                 page: 1
        //             }
        //         })
        //         setTotalPages(res.data.data.products.totalPages)
        //         setData(res.data.data.products.result)
        //     }
        // } catch (error) {
        //     console.log(error)
        // }
        // setLoading(false)
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
            <AdminCustomSeparator breadcums={[{ label: 'User' }]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100%' }}>
                <Typography fontSize={35} fontWeight={600}>User</Typography>
                <Button sx={{ backgroundColor: '#FFD333', color: '#000000', textTransform: 'none', fontSize: '20px', fontWeight: '600' }} onClick={() => navigate('/addUser')}>New user</Button>
            </div>
            <div className="boxShadow" style={{ width: '100%', height: '70vh', marginTop: '30px', maxWidth: '100%' }}>
                <div style={{ padding: '25px 15px 20px 15px', width: '100%' }}>
                    <div style={{ border: '1.5px solid #C4C4C4', height: '51px', width: '100%', padding: '10px 15px', display: 'flex' }}>
                        <div style={{ width: '20px', marginRight: '10px' }}>
                            <SearchIcon />
                        </div>
                        <div style={{ width: '1000px', maxWidth: '100%' }}>
                            <input placeholder="Search users" value={searchInput} onChange={handleSearchInput} />
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
                                <th style={{ width: '25%', padding: '0 20px' }}>User</th>
                                <th style={{ width: '20%', textAlign: 'center' }}>Contact</th>
                                <th style={{ width: '15%' }}>Status</th>
                                <th style={{ width: '15%' }}>Verify Email</th>
                                <th style={{ width: '10%' }}>Verify Contact</th>
                                <th></th>
                            </tr>
                            {data.map((el, index) => (
                                <tr>
                                    <td style={{ width: '5%', textAlign: 'center' }}><Typography fontWeight={700} fontSize={20}>{(currentPage - 1) * size + index + 1}</Typography></td>
                                    <td style={{ width: '25%' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <div style={{ margin: '5px 10px 0 0 ' }}>
                                                <Avatar style={{ width: '60px', height: '60px', boxShadow: '0.5px 0.5px 12px rgba(0, 0, 0, 0.25)', borderRadius: '0' }} src={el.avatar} />
                                            </div>
                                            <div style={{ width: '250px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                    <Typography style={styleTyph} width={100} height={34} overflow={'hidden'}>{el.username}</Typography>
                                                    <div style={{ height : '34px',borderRadius: '10px', padding: '5px 20px', background: `${colorWithRole(el.role).bgcolor}` }}>
                                                        <Typography color={colorWithRole(el.role).color}>{modifyLetter(el.role)}</Typography>
                                                    </div>
                                                </div>
                                                <Typography color={'#3D464D'}>{el.email}</Typography>
                                            </div>
                                        </div>
                                    </td>
                                    <td style={{ width: '20%', textAlign: 'center' }}><Typography style={styleTyph}>{el.contact}</Typography></td>
                                    <td style={{ width: '15%' }}><Typography style={styleTyph}>{el.isActive ? 'Active' : 'Disabled'}</Typography></td>
                                    <td style={{ width: '10%' }}><Typography style={styleTyph}>{el.isEmailVerified ? 'Yes' : 'No'}</Typography></td>
                                    <td style={{ width: '10%' }}><Typography style={styleTyph}>{el.isContactVerified ? 'Yes' : 'No'}</Typography></td>
                                    <td>
                                        <Stack direction="row" alignItems="center" spacing={'1px'}>
                                            <IconButton aria-label="edit" size="small" onClick={() => navigate(`/editUser/${el.id}`)}>
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

export default UserListComponent;