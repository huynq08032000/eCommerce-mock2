import React from "react";
import '../../css/index.scss'
import 'antd/dist/antd.css';
import { Input, Space } from 'antd';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

const { Search } = Input;
const SearhComponent = () => {
    const onSearch = (value) => console.log(value);

    return (
        <Space direction="vertical" style={{
            width: '100%',
            borderRadius : '5px',
            backgroundColor : '#C4C4C4'
        }}>
            <Search
                addonBefore={<div style={{display : 'flex'}}><MenuOutlinedIcon/>Categories</div>}
                placeholder="Search Items"
                onSearch={onSearch}
            />
        </Space>
    )
}

export default SearhComponent;