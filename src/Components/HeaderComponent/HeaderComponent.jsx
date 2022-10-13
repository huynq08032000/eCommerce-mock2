import React from "react";
import "../HeaderComponent/css/index.scss"
import 'antd/dist/antd.css';
import { Button, Input, Space } from 'antd';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderComponent = () => {

    return (
        <>
            <div className="header-container" >
                <div className="left-side">
                    <div className="title">Proshop</div>
                    <div>
                        <form style={{display : 'flex'}}>
                            <Input type="text" placeholder="Search Products" style={{ padding: '7px 20px', margin: '0 10px', borderRadius: 0, minWidth : '200px' }} />
                            <Button type='primary' loading={false} className='search-btn'>Search</Button>
                        </form>
                    </div>
                </div>
                <div className="right-side">
                    <div className="child-items"><ShoppingCartIcon fontSize="15px" style={{margin : '0 5px'}}/>Cart</div>
                    <div className="child-items"><PersonIcon fontSize="15px" style={{margin : '0 5px'}}/>Signin</div>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent;