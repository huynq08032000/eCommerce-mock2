import React, { useState } from "react";
import "../HeaderComponent/css/index.scss"
import IconButton from '@mui/material/IconButton';
import SearchComponent from '../HeaderComponent/ChildComponent/SearchComponent/SearchComponent'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AuthModal from "../AuthModal/AuthModal";

const HeaderComponent = () => {
    const arrHeader = [
        {
            title: 'About us'
        },
        {
            title: 'Contact'
        },
        {
            title: 'Store',
        },
        {
            title: 'Track Orders'
        }
    ]
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    return (
        <>
            <div style={{ backgroundColor: '#F0E9E9' }}>
                <div className="header-container-temp">
                    {
                        arrHeader.map((el, index) => {
                            return (
                                <div className="items" key={index}>
                                    {el.title}
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className="container">
                <div className="header-container" >
                    <div className="left-side">
                        <div className="title">Shop app</div>
                    </div>
                    <div className="middle-side">
                        <SearchComponent />
                    </div>
                    <div className="right-side">
                        <div className="child-items"><IconButton><ShoppingCartOutlinedIcon style={{ margin: '0 5px' }} /></IconButton></div>
                        <div className="child-items"><IconButton onClick={handleOpen}><PersonOutlineOutlinedIcon style={{ margin: '0 5px' }} /></IconButton></div>
                    </div>
                </div>
            </div>
            <AuthModal open={open} setOpen={setOpen} />
        </>
    )
}

export default HeaderComponent;