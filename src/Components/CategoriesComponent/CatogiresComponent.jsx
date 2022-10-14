import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import axios from "axios";
import { getAllCategories } from "../../config/api";
import CategoriesItem from "./CategoriesItems/CategoriesItem";
import { modifyLetter } from "../../ultis/ultis";

const CategoriesComponent = () => {
    const [cateItems, setCateItems] = useState([])
    useEffect(() => {
        fetchCategories()
    }, [])
    const fetchCategories = async () => {
        try {
            const res = await axios.get(getAllCategories)
            console.log(res.data.data)
            setCateItems(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', padding : '10px' }}><MenuOutlinedIcon /><span style={{ fontSize: '20px', marginLeft: '10px' }}>Categories</span></div>
            {cateItems?.map((el, index)=>{
                return <div key={index}>
                    <CategoriesItem cate={modifyLetter(el)}/>
                </div>
            })}
        </>
    )
}

export default CategoriesComponent;