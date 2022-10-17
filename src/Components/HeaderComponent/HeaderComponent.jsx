import React, { useState } from "react";
import "../HeaderComponent/css/index.scss"
import IconButton from '@mui/material/IconButton';
import SearchComponent from '../HeaderComponent/ChildComponent/SearchComponent/SearchComponent'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AuthModal from "../AuthModal/AuthModal";
import { useSelector } from "react-redux";
import { Avatar, Badge, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { modifyLetter } from "../../ultis/ultis";
import { useNavigate } from "react-router-dom";

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
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
    const { user, cart } = useSelector(state => state.user)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    console.log(user)
    const navigate = useNavigate()
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
                        <div className="title" onClick={()=>navigate('/')}>Shop app</div>
                    </div>
                    <div className="middle-side">
                        <SearchComponent />
                    </div>
                    <div className="right-side">
                        <div className="child-items"><IconButton><Badge style={{fontWeight: '500' }} badgeContent={cart.length}><ShoppingCartOutlinedIcon/></Badge></IconButton></div>
                        <div className="child-items">
                            {user.id ? <><Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={modifyLetter(user.username)} src={user.avatar !== null ? user.avatar : '/static/images/avatar/2.jpg'} />
                                </IconButton>
                            </Tooltip>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {settings.map((setting) => (
                                        <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{setting}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu></> : <><IconButton onClick={handleOpen}><PersonOutlineOutlinedIcon style={{ margin: '0 5px' }} /></IconButton></>}
                        </div>
                    </div>
                </div>
            </div>
            <AuthModal open={open} setOpen={setOpen} />
        </>
    )
}

export default HeaderComponent;