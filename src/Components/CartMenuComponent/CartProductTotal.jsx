import { Button, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { countSubtotal } from "../../ultis/ultis";
import './css/index.scss'

const CartProductTotal = ({ style }) => {
    const { cart } = useSelector(state => state.user)
    const subTotal = useMemo(() => countSubtotal(cart), [cart])
    const shippingPrice = 10.00
    return (
        <>
            <div className="carttotal-item sub-total" style={style}>
                <div><Typography fontWeight={700} fontSize={style === undefined ? 18 : style.fontSize}>Subtotal</Typography></div>
                <div><Typography fontWeight={700} fontSize={style === undefined ? 18 : style.fontSize} color={'#727070'}>${subTotal}</Typography></div>
            </div>
            <div className="carttotal-item shipping" style={style}>
                <div><Typography fontWeight={700} fontSize={style === undefined ? 18 : style.fontSize}>Shipping</Typography></div>
                <div><Typography fontWeight={700} fontSize={style === undefined ? 18 : style.fontSize} color={'#727070'}>${shippingPrice}</Typography></div>
            </div>
            <div className="carttotal-item total" style={style}>
                <div><Typography fontWeight={700} fontSize={style === undefined ? 18 : style.fontSize}>Total</Typography></div>
                <div><Typography fontWeight={700} fontSize={style === undefined ? 18 : style.fontSize} color={'#727070'}>{subTotal + shippingPrice}</Typography></div>
            </div>
        </>
    )
}

export default CartProductTotal;