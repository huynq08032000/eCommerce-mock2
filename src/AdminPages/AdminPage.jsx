import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import './css/index.scss'
import { Avatar, Badge, Collapse, ListSubheader, Tooltip } from '@mui/material';
import { useSelector } from 'react-redux';
import { modifyLetter } from '../ultis/ultis';
import { ExpandLess } from '@mui/icons-material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useLocation, useNavigate } from 'react-router-dom';
const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    boxShadow: 'none',
    backgroundColor: '#FFFFFF',
    color: '#000000',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        boxShadow: 'none',
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


const AdminPage = ({ component }) => {
    const navigate = useNavigate()
    const location = useLocation()
    const theme = useTheme();
    const [open, setOpen] = useState(true);
    const [openCollapse, setopenCollapse] = useState(true)
    const [openCollapse2, setopenCollapse2] = useState(true)
    const { user } = useSelector(state => state.user)
    const handleDrawer = () => {
        setOpen(!open);
        if (open) {
            setopenCollapse(false)
            setopenCollapse2(false)
        }
    };
    const leftSideLink = [
        {
            icon: <DashboardIcon />,
            label: 'Dashboard',
            href: '/admin'
        },
        {
            icon: <InventoryIcon />,
            label: 'Product',
            openCollapse: openCollapse,
            onClick: setopenCollapse,
            child: [
                {
                    label: 'Product List',
                    href: '/productList'
                },
                {
                    label: 'Add Product',
                    href: '/addProduct'
                }
            ]
        },
        {
            icon: <PersonIcon />,
            label: 'User',
            openCollapse: openCollapse2,
            onClick: setopenCollapse2,
            child: [
                {
                    label: 'User List',
                    href: '/userList'
                },
                {
                    label: 'Add User',
                    href: '/addUser'
                }
            ]
        },
        {
            icon: <ShoppingCartOutlinedIcon />,
            label: 'Orders',
            href: '/orderhistory'
        }
    ]
    const addActive = (href) => {
        if (location.pathname === href) return "active"
        return ""
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} >
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawer}
                            edge="start"
                            sx={{
                                marginRight: 5,
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Admin
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }} className='admin-navbar-rightside'>
                        <div>
                            <Tooltip title='Open Noti'>
                                <IconButton sx={{ p: 0 }}>
                                    <Badge style={{ fontWeight: '500', color: '#000000' }} badgeContent={3}><NotificationsIcon /></Badge>
                                </IconButton>
                            </Tooltip>
                        </div>
                        <div>
                            <Avatar
                                alt="Remy Sharp"
                                src={user.avatar}
                                style={{ width: 40, height: 40, borderRadius: '5px' }}
                            />
                        </div>
                        <div>
                            <div>
                                <Typography fontSize={18}>{modifyLetter(user.username)}</Typography>
                            </div>
                            <div>
                                <Typography color={'#929395'} fontSize={15}>{modifyLetter(user.role)}</Typography>
                            </div>
                        </div>
                    </div>
                </Toolbar>

            </AppBar>
            <Drawer variant="permanent" open={open} sx={{ backgroundColor: '#3D464D' }}>
                <DrawerHeader sx={{ backgroundColor: '#FFD333' }}>
                    <Typography fontSize={25} fontWeight={700} fontFamily={'Red Rose'}>SHOP APP</Typography>
                    <div style={{ backgroundColor: '#ffffff', borderRadius: '5px', padding: '5px 10px' }}>
                        <Typography fontSize={10} fontWeight={700} fontFamily={'Arial'}>ADMIN</Typography>
                    </div>
                </DrawerHeader>
                <List
                    subheader={open ?
                        <ListSubheader component="div" id="nested-list-subheader" sx={{ backgroundColor: '#3D464D', padding: '5px 10px' }}>
                            <Typography color={'#ffffff'} fontWeight={700} fontSize={12}>APPLICATION</Typography>
                        </ListSubheader> : <></>
                    }>
                    {leftSideLink.map((el, index) => (
                        <ListItem key={el.label} disablePadding sx={{ display: 'block' }}>
                            {el.child ? <>
                                <ListItemButton onClick={() => {
                                    setOpen(true)
                                    el.onClick(!el.openCollapse)
                                }} >
                                    <ListItemIcon>
                                        {el.icon}
                                    </ListItemIcon>
                                    <ListItemText >{el.label}</ListItemText>
                                    {el.openCollapse ? <ExpandLess /> : <ChevronLeftIcon />}
                                </ListItemButton>
                                <Collapse in={el.openCollapse} timeout="auto" unmountOnExit>
                                    {el.child.map((el, index) => (
                                        <List component="div" disablePadding key={el.label}>
                                            <ListItemButton sx={{ pl: 4 }} className={addActive(el.href)} onClick={() => navigate(el.href)}>
                                                <ListItemText primary={el.label} sx={{ padding: '0px 40px' }} />
                                            </ListItemButton>
                                        </List>
                                    ))}
                                </Collapse></> : <>
                                <ListItemButton className={addActive(el.href)} onClick={() => navigate(el.href)}>
                                    <ListItemIcon>
                                        {el.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={el.label} />
                                </ListItemButton></>}
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
                <DrawerHeader />
                {component}
            </Box>
        </Box >
    );
}
export default AdminPage;