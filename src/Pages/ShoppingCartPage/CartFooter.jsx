import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import CartProductTotal from "../../Components/CartMenuComponent/CartProductTotal";

const CartFooter = () => {

    return (
        <>
            <div className="cart-footer-containter" style={{ margin: '30px 0px', display: 'flex', justifyContent: 'space-between' }}>
                <div className="cart-footer-leftside" style={{ display: 'flex', height: '56px' }}>
                    <TextField id="outlined-basic" label="Coupon Code" variant="outlined" sx={{ backgroundColor: '#C4C4C4', width: '280px', marginRight: '10px' }} />
                    <Button type="primary" sx={{ backgroundColor: '#FFD333', textTransform: 'none', padding: '5px 30px' }}><Typography fontWeight={700} fontSize={18} color={'#000000'}>Apply Coupon</Typography></Button>
                </div>
                <div className="cart-footer-righttside" style={{ padding: '20px 25px 20px 25px', borderRadius: '5px', border: '1px solid rgba(90, 90, 90, 0.4)', width: '571px', height: '450px' }}>
                    <Typography fontWeight={700} fontSize={34}>Cart Total</Typography>
                    <CartProductTotal style={{ margin: '50px 0px', fontSize: '24px' }} />
                    <Button type="primary" sx={{ backgroundColor: '#FFD333', width: '100%', textTransform: 'none' }}><Typography fontWeight={700} fontSize={18} color={'#000000'}>Proceed to checkout</Typography></Button>
                </div>
            </div>
        </>
    )
}

export default CartFooter;