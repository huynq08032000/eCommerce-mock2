import { Button, Typography } from "@mui/material";
import React from "react";
import AdminCustomSeparator from "../../AdminComponents/AdminBreadCrumbsComponent/AdminCustomSeparator";
import '../../css/index.scss'
import SearchIcon from '@mui/icons-material/Search';
const ProductListComponent = () => {
    return (
        <>
            <AdminCustomSeparator breadcums={[{ label: 'Product' }]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100%' }}>
                <Typography fontSize={35} fontWeight={600}>Product</Typography>
                <Button sx={{ backgroundColor: '#FFD333', color: '#000000', textTransform: 'none', fontSize: '20px', fontWeight: '600' }}>New product</Button>
            </div>
            <div className="boxShadow" style={{ width: '100%', height: '70vh', marginTop: '30px', maxWidth: '100%' }}>
                <div style={{ padding: '25px 15px 20px 15px', width: '100%' }}>
                    <div style={{ border: '1.5px solid #C4C4C4', height: '51px', width: '100%', padding: '10px 15px', display: 'flex' }}>
                        <div style={{ width: '20px', marginRight: '10px' }}>
                            <SearchIcon />
                        </div>
                        <div style={{ width: '1000px', maxWidth: '100%' }}>
                            <input placeholder="Search products" />
                        </div>
                    </div>
                </div>
                <div style={{ border: '2px solid #929395' }}>

                </div>
            </div>
        </>
    )
}

export default ProductListComponent;