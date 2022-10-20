import { Button, Typography } from "@mui/material";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { countSubtotal } from "../../ultis/ultis";

const style = {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0px'
}
const CartProductTotal = () => {
    const { cart } = useSelector(state => state.user)
    const subTotal = useMemo(() => countSubtotal(cart), [cart])
    const shippingPrice = 10.00
    return (
        <>
            <div className="sub-total" style={style}>
                <div><Typography fontWeight={700} fontSize={18}>Subtotal</Typography></div>
                <div><Typography fontWeight={700} fontSize={18} color={'#727070'}>${subTotal}</Typography></div>
            </div>
            <div className="shipping" style={style}>
                <div><Typography fontWeight={700} fontSize={18}>Shipping</Typography></div>
                <div><Typography fontWeight={700} fontSize={18} color={'#727070'}>${shippingPrice}</Typography></div>
            </div>
            <div className="total" style={style}>
                <div><Typography fontWeight={700} fontSize={18}>Total</Typography></div>
                <div><Typography fontWeight={700} fontSize={18} color={'#727070'}>{subTotal + shippingPrice}</Typography></div>
            </div>
        </>
    )
}

export default CartProductTotal;