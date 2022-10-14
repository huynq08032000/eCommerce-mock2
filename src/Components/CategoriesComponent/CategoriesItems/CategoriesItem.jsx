import React from "react";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './index.scss'
const CategoriesItem = ({ cate }) => {
    return (
        <>
            <div className="cate-item">
                <div className="cate-item-name">
                    {cate}
                </div>
                <div className="cate-item-arrow">
                    <ArrowForwardIosOutlinedIcon/>
                </div>
            </div>
        </>
    )
}

export default CategoriesItem;