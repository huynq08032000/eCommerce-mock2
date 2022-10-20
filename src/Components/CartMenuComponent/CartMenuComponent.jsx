import React from "react";
import 'antd/dist/antd.css';
import { Button, Image } from "antd";
import { Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { removeCart } from "../../redux/UserSlice";
const CartMenuComponent = ({ product }) => {
    const dispatch = useDispatch()
    const handleRemove = () => {
        dispatch(removeCart(product))
    }
    return (
        <div className="cart-menu-container" style={{ display: 'flex', justifyContent: 'space-between', width: '300px', alignItems: 'center' }}>
            <div>
                <Image width={'81px'} height={'64px'} src={product.images[0]?.url} preview={false}
                    style={{ borderRadius: '5px', boxShadow: '0.5px 0.5px 12px rgba(0, 0, 0, 0.25)' }}></Image>
            </div>
            <div style={{ width: '100px' }}>
                <Typography fontSize={18} fontWeight={700} >{product.name}</Typography>
                <Typography fontSize={16}>{product.quantity} x ${product.price}</Typography>
            </div>
            <div>
                <Button style={{ border: 'none' }} onClick={handleRemove}>x</Button>
            </div>
        </div>
    )
}

export default CartMenuComponent;