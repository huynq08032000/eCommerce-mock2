import { Typography } from "@mui/material";
import React from "react";
import '../../css/index.scss'
const ProductCreateComponent = ({ label, style, children }) => {
    return (
        <>
            <div className="boxShadow" style={style}>
                <div style={{ padding: '10px 15px 5px 25px' }}>
                    <Typography fontWeight={700} fontSize={22}>{label}</Typography>
                </div>
                <div style={{ borderBottom: '1px solid #929395' }}>
                </div>
                <div style={{ padding: '20px 25px' }}>
                    {children}
                </div>
            </div>
        </>
    )
}
export default ProductCreateComponent;