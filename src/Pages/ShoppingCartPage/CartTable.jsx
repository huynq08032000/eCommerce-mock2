import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "antd";
import { Button } from "@mui/material";
import './css/index.scss'
import { decreaseQuantity, increaseQuantity } from "../../redux/UserSlice";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#C4C4C4",
        color: "#000000",
        fontSize: "16px",
        fontWeight: "700"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: "24px",
        fontWeight: "700"
    }
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0
    }
}));

function createData(id, image, product, price, quantity) {
    return { id, image, product, price, quantity };
}

const CartTable = () => {
    const [rows, setRows] = useState([]);
    const dispatch = useDispatch()
    const { cart } = useSelector(state => state.user)
    console.log(cart)
    useEffect(() => {
        const rowsTmp = cart?.map(el => createData(el.id, el.images[0]?.url, el.name, el.price, el.quantity))
        console.log(rowsTmp)
        setRows(rowsTmp)
    }, [cart])
    const handleIncrease = (el) => {
        dispatch(increaseQuantity(el))
    }
    const handleDecrease = (el) => {
        dispatch(decreaseQuantity(el))
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">Image</StyledTableCell>
                        <StyledTableCell align="left">Product</StyledTableCell>
                        <StyledTableCell align="center">Price</StyledTableCell>
                        <StyledTableCell align="center">Quantity</StyledTableCell>
                        <StyledTableCell align="center">Total</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows?.map((el) => (
                        <StyledTableRow key={el.id}>
                            <StyledTableCell component="th" scope="row" sx={{ width: '120px' }}>
                                <Image src={el.image} preview={false} width={'119px'} height={'108px'} style={{ borderRadius: '5px' }} />
                            </StyledTableCell>
                            <StyledTableCell align="left" sx={{ width: '500px' }}>{el.product}</StyledTableCell>
                            <StyledTableCell align="center">${el.price}</StyledTableCell>
                            <StyledTableCell align="center" sx={{ width: '30px' }}>
                                <div className="btn-group" >
                                    <div onClick={() => handleDecrease(el)}><Button style={{ color: '#33A0FF', fontSize: '15px', fontWeight: '700' }}>-</Button></div>
                                    <div>{el.quantity}</div>
                                    <div onClick={() => handleIncrease(el)}><Button style={{ color: '#33A0FF', fontSize: '15px', fontWeight: '700' }}>+</Button></div>
                                </div>
                            </StyledTableCell>
                            <StyledTableCell align="center">{el.quantity * el.price}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CartTable;
