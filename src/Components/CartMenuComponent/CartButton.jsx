import { Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const CartButton = () => {
    const navigate = useNavigate()
    const handleOnClick = (link) => {
        navigate(link)
    }
    return (
        <>
            <div className="btn-cart" style={{ display: 'flex', justifyContent: 'space-between', margin: '10px 0px' }}>
                <div>
                    <Button type="primary" sx={{ backgroundColor: '#C4C4C4', textTransform: 'none' }} onClick={() => handleOnClick('/shoppingcart')}>
                        <Typography fontWeight={700} fontSize={18} color={'#000000'}>View Cart</Typography>
                    </Button>
                </div>
                <div>
                    <Button type="primary" sx={{ backgroundColor: '#FFD333', textTransform: 'none' }} onClick={() => handleOnClick('/checkout')}>
                        <Typography fontWeight={700} fontSize={18} color={'#000000'}>Checkout</Typography>
                    </Button>
                </div>
            </div>
        </>
    )
}

export default CartButton;