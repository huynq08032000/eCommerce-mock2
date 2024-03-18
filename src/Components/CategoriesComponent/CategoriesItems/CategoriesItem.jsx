import React from "react";
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import './index.scss'
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../../../redux/ProductsSlice";
const CategoriesItem = ({ cate }) => {
    const {category} = useSelector(state => state.products)
    const dispatch = useDispatch()
    const handleOnClick = () => {
        dispatch(setCategory(cate))
    }
    const addActiveClass= (category) => {
        if (category===cate) return "cate-item cate-active"
        return "cate-item"
    }
    return (
        <>
            <div className={addActiveClass(category)} onClick={handleOnClick}>
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