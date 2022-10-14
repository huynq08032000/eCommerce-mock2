import React from "react";
import 'antd/dist/antd.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const CategoriesComponent = () => {

    return (
        <>
            <div style={{ display: 'flex' , alignItems :'center'}}><MenuOutlinedIcon /><span style={{fontSize : '20px', marginLeft : '10px'}}>Categories</span></div>
            Categories
        </>
    )
}

export default CategoriesComponent;