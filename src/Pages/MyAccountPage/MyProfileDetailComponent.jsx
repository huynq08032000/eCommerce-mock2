import { Avatar, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ModalEditProfile from "./ModalEditProfile";

const MyProfileDetailComponent = () => {
    const [open, setOpen] = useState(false);
    const { user } = useSelector(state => state.user)
    console.log(user)
    return (
        <>
            <Avatar
                alt="Remy Sharp"
                src={user.avatar}
                style={{ width: '128px', height: '128px' }}
            />
            <div className="myprofile-user-info">
                <Typography fontWeight={700} fontSize={36}>{user.username}</Typography>
                <Typography fontWeight={700} fontSize={20} sx={{ display: 'flex' }}>Email: <Typography fontSize={20} sx={{ marginLeft: '5px' }}>{user.email}</Typography></Typography>
                <Typography fontWeight={700} fontSize={20} sx={{ display: 'flex' }}>Address: <Typography fontSize={20} sx={{ marginLeft: '5px' }}>La Khe, Ha Dong, Hanoi</Typography></Typography>
                <Typography fontWeight={700} fontSize={20} sx={{ display: 'flex' }}>Phone: <Typography fontSize={20} sx={{ marginLeft: '5px' }}>{user.contact}</Typography></Typography>
                <Button onClick={() => setOpen(true)} sx={{ textTransform: 'none', width: '157px', fontSize: '16px', fontWeight: '700', backgroundColor: '#FFD333', marginTop: '20px', color: '#000000' }}>Edit Profile</Button>
            </div>
            <ModalEditProfile open={open} setOpen={setOpen} />
        </>
    )
}

export default MyProfileDetailComponent;