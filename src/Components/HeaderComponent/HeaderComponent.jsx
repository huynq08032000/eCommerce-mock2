import React, { useState } from "react";
import "../HeaderComponent/css/index.scss"
import IconButton from '@mui/material/IconButton';
import SearchComponent from '../HeaderComponent/ChildComponent/SearchComponent/SearchComponent'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AuthModal from "../AuthModal/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Badge, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import { clearLocalStorage, modifyLetter } from "../../ultis/ultis";
import { useNavigate } from "react-router-dom";
import CartMenuComponent from "../CartMenuComponent/CartMenuComponent";
import CartProductTotal from "../CartMenuComponent/CartProductTotal";
import CartButton from "../CartMenuComponent/CartButton";
import { clearUser } from "../../redux/UserSlice";

const HeaderComponent = () => {
    const dispatch = useDispatch()
    const { user, cart } = useSelector(state => state.user)
    const navigate = useNavigate();

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
    const settings = [
        {
            label: 'My Porfile',
            onClick: () => {
                navigate(`/myprofile`)
            }
        },
        {
            label: 'Order History',
            onClick: () => {
                navigate('/orderhistory')
            }
        },
        {
            label: 'Logout',
            onClick: () => {
                console.log('Logout')
                localStorage.clear()
                window.location.pathname = '/'
            }
        }
    ];

    console.log(cart)
    const [open, setOpen] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState(null);
    const [anchorElCart, setAnchorElCart] = useState(null)
    const handleOpen = () => setOpen(true);
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleOpenCartMenu = (event) => {
        setAnchorElCart(event.currentTarget);
    };

    const handleCloseCartMenu = () => {
        setAnchorElCart(null);
    };
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
                        <div className="title" onClick={() => navigate('/')}>Shop App</div>
                    </div>
                    <div className="middle-side">
                        <SearchComponent />
                    </div>
                    <div className="right-side">
                        <div className="child-items">
                            <Tooltip title='Open Cart'>
                                <IconButton onClick={handleOpenCartMenu} sx={{ p: 0 }}>
                                    <Badge style={{ fontWeight: '500' }} badgeContent={cart.length}><ShoppingCartOutlinedIcon /></Badge>
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElCart}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElCart)}
                                onClose={handleCloseCartMenu}
                            >
                                {cart.length === 0 ? <>
                                    <div style={{
                                        width: '338px', height: '113px', boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)', borderRadius: '5px', display: 'flex',
                                        alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Typography fontSize={16} fontFamily={"Roboto"}>Your shopping cart is empty!</Typography>
                                    </div></> : <>
                                    <div className="cart-products-detail" style={{ maxHeight: '200px', overflowY: 'scroll', borderBottom: '1px solid #959292' }}>
                                        {cart.map((el, index) => (
                                            <MenuItem key={el.id}>
                                                <CartMenuComponent product={el} />
                                            </MenuItem>
                                        ))}
                                    </div>
                                    <div className="cart-products-total" style={{ padding: '10px 15px 5px 15px' }}>
                                        <CartProductTotal />
                                        <CartButton />
                                    </div>
                                </>}

                            </Menu>
                        </div>
                        <div className="child-items">
                            {user.id ? <><Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt={modifyLetter(user.username)} src={user.avatar} />
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
                                        <MenuItem key={setting} onClick={setting.onClick}>
                                            <Typography textAlign="center">{setting.label}</Typography>
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