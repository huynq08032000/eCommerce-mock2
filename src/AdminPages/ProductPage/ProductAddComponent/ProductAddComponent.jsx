import { Button, TextField, Typography } from "@mui/material";
import React from "react";
import AdminCustomSeparator from "../../AdminComponents/AdminBreadCrumbsComponent/AdminCustomSeparator";
import ProductCreateComponent from "./ProductCreateComponent";
import UploadFileIcon from '@mui/icons-material/UploadFile';

const ProductAddComponent = () => {

    return (
        <>
            <AdminCustomSeparator breadcums={[{ label: 'Product', href: '/productList' }, { label: 'Create product' }]} />
            <div style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '100%' }}>
                <Typography fontSize={35} fontWeight={600}>Create Product</Typography>
                <Button sx={{ backgroundColor: '#FFD333', color: '#000000', textTransform: 'none', fontSize: '20px', fontWeight: '600' }} >Add product</Button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px 0px 25px', }}>
                <div>
                    <ProductCreateComponent label={'Basic Information'} style={{ width: '676px', height: '730px' }}>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Name</Typography>
                            <TextField
                                size="small"
                                fullWidth
                            />
                        </div>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Description</Typography>
                            <TextField
                                multiline
                                rows={3}
                                size="small"
                                fullWidth
                            />
                        </div>
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <div className="input-wrapper" style={{ marginBottom: '20px', width: '45%' }}>
                                <Typography fontSize={18} fontWeight={700}>Price</Typography>
                                <TextField
                                    size="small"
                                    fullWidth
                                    InputLabelProps={{ shrink: true }}
                                />
                            </div>
                            <div className="input-wrapper" style={{ marginBottom: '20px', width: '45%' }}>
                                <Typography fontSize={18} fontWeight={700}>Discount Percent</Typography>
                                <TextField
                                    size="small"
                                    fullWidth
                                />
                            </div>
                        </div>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Brand</Typography>
                            <TextField
                                size="small"
                                fullWidth
                            />
                        </div>
                        <div className="input-wrapper" style={{ marginBottom: '20px' }}>
                            <Typography fontSize={18} fontWeight={700}>Stock Quality</Typography>
                            <TextField
                                size="small"
                                fullWidth
                            />
                        </div>
                    </ProductCreateComponent>
                </div>
                <div>
                    <ProductCreateComponent label={'Images'} style={{ width: '431px', height: '260px' }}>
                        <div style={{ height: '100px', textAlign: 'center' }}>
                            <UploadFileIcon sx={{ height: '92px', width: '77px' }} />
                        </div>
                        <div className="input-wrapper" style={{ marginTop: '30px', width: '100%', border: '1px solid #929395', borderRadius: '2px' }}>
                            <Button variant="contained" component="label" sx={{ borderRadius: '2px', background: '#C4CDD5' }}>
                                Upload
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                        </div>
                    </ProductCreateComponent>
                    <ProductCreateComponent label={'Categories'} style={{ width: '431px', height: '184px', marginTop: '20px' }}>
                        <div className="input-wrapper" style={{ marginTop: '30px', width: '100%' }}>
                        </div>
                    </ProductCreateComponent>
                    <ProductCreateComponent label={'Rating'} style={{ width: '431px', height: '241px', marginTop: '20px' }}>
                        <div className="input-wrapper" style={{ marginTop: '30px', width: '100%' }}>
                        </div>
                    </ProductCreateComponent>
                </div>
            </div>
        </>
    )
}

export default ProductAddComponent;