import React, { useEffect, useState } from "react";
import { Pagination, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import './css/index.scss'
import axiosInstance from "../../ultis/customAxios";
import { getMyOrdersApi } from "../../config/api";
import { modifyTimeOrderTable } from "../../ultis/ultis";
import LoadingComponent from "../../Components/LoadingComponent/LoadingComponent";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#C4C4C4",
        color: "#000000",
        fontSize: "24px",
        fontWeight: "700"
    },
    [`&.${tableCellClasses.body}`]: {
        padding: '13px 0px',
        fontSize: "24px",
        fontWeight: "700"
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    "td, th": {
        border: 0
    }
}));

function createData(id, createAt, status, totalPrice) {
    return { id, createAt, status, totalPrice };
}
const MyOrderTable = ({ label }) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [rows, setRows] = useState([]);
    const [totalPages, setTotalPages] = useState(0)
    useEffect(() => {
        getMyOrder()
    }, [currentPage])

    const getMyOrder = async () => {
        setLoading(true)
        try {
            const res = await axiosInstance.get(getMyOrdersApi, {
                params: {
                    size: 4,
                    page: currentPage
                }
            })
            const rowsTmp = res.data.data.orders.result?.map(el => createData(el.id, el.createdAt, el.status, el.totalPrice))
            setRows(rowsTmp)
            setTotalPages(res.data.data.orders.totalPages)
        } catch (error) {
            console.log(error)
        }
        setLoading(false)
    }
    return (
        <>
            <div className="order-title" style={{ padding: '10px 20px' }}>
                <Typography fontWeight={700} fontSize={28}>{label}</Typography>
            </div>
            <div className="order-table">
                {loading ? <LoadingComponent /> : <>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700, maxHeight: '300px' }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell align="center">Order</StyledTableCell>
                                    <StyledTableCell align="left">Date</StyledTableCell>
                                    <StyledTableCell align="center">Status</StyledTableCell>
                                    <StyledTableCell align="center">Total</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows?.map((el) => (
                                    <StyledTableRow key={el.id}>
                                        <StyledTableCell component="th" scope="row" align="center" sx={{ width: '120px' }}>
                                            #{el.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="left" sx={{ width: '500px', paddingLeft: '15px !important' }}>{modifyTimeOrderTable(el.createAt)}</StyledTableCell>
                                        <StyledTableCell align="center">{el.status}</StyledTableCell>
                                        <StyledTableCell align="center">${el.totalPrice}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </>}

            </div>
            <div>
                <Pagination count={totalPages} variant="outlined" shape="rounded" style={{ display: 'flex', justifyContent: 'center', margin: '10px' }} onChange={(e, number) => {
                    setCurrentPage(number)
                }} />
            </div>
        </>
    )
}
export default MyOrderTable;