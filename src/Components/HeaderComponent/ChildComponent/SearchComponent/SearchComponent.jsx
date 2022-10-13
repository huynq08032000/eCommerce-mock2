import React from "react";
import '../../css/index.scss'
import 'antd/dist/antd.css';
import { Button, Input, Space } from 'antd';

const SearhComponent = () => {

    return (
        <form style={{ display: 'flex' }}>
            <Input type="text" placeholder="Search Products" style={{ padding: '7px 20px', margin: '0 10px', borderRadius: 0, minWidth: '200px' }} />
            <Button type='primary' loading={false} className='search-btn'>Search</Button>
        </form>
    )
}

export default SearhComponent;