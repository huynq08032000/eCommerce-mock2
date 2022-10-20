import { Typography } from "@mui/material";
import React from "react";
import CartProductTotal from "../../Components/CartMenuComponent/CartProductTotal";

const CartFooter = () => {

    return (
        <>
            <div className="cart-footer-containter" style={{ margin: '30px 0px' }}>
                <div className="cart-footer-leftside">

                </div>
                <div className="cart-footer-righttside" style={{ padding: '5px 10px 15px 10px', borderRadius: '5px', border: '1px solid rgba(90, 90, 90, 0.4)', width: '571px' }}>
                    <Typography fontWeight={700} fontSize={34}>Cart Total</Typography>
                    <CartProductTotal  />
                </div>
            </div>
        </>
    )
}

export default CartFooter;