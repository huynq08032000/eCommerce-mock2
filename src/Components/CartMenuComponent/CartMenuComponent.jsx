import React from "react";
import 'antd/dist/antd.css';
import { Button, Image } from "antd";
import { Typography } from "@mui/material";
const CartMenuComponent = () => {

    return (
        <div className="cart-menu-container" style={{ display: 'flex', justifyContent: 'space-between', width: '300px', alignItems: 'center' }}>
            <div>
                <Image width={'81px'} height={'64px'} src="https://res.cloudinary.com/devjs/image/upload/v1647848064/uploads_media/1647848064353_s2mieo.jpg" preview={false}
                    style={{ borderRadius: '5px', boxShadow: '0.5px 0.5px 12px rgba(0, 0, 0, 0.25)' }}></Image>
            </div>
            <div>
                <Typography fontSize={18} fontWeight={700} >Adidas Shoes</Typography>
                <Typography fontSize={16}>1 x $120.00</Typography>
            </div>
            <div>
                <Button style={{ border: 'none' }}>x</Button>
            </div>
        </div>
    )
}

export default CartMenuComponent;