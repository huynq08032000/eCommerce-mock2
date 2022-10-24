import { Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import CustomSeparator from "../../Components/BreadCrumbsComponent/CustomSeparator";
import './css/index.scss'
const MyAccountPageComponent = ({ rightSideComponent }) => {
    const breadcrumbs = [{ label: 'My Account' }]
    return (
        <>
            <CustomSeparator breadcums={breadcrumbs} />
            <Typography fontWeight={700} fontSize={40} style={{ margin: '10px 0px' }}>My Account</Typography>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="myaccount-leftside" >
                    <Typography fontWeight={700} fontSize={28}>Navigation</Typography>
                    <NavLink to="/myprofile" className="myaccount-leftside-link" style={({ isActive }) => ({
                        color: isActive ? '#FFD333' : '#868484',
                        backgroundColor : '#fff'
                    })}>
                        My Profile
                    </NavLink>
                    <NavLink to="/orderhistory" className="myaccount-leftside-link" style={({ isActive }) => ({
                        color: isActive ? '#FFD333' : '#868484'
                    })}>
                        Order History
                    </NavLink>
                    <NavLink to="/logout" className="myaccount-leftside-link" style={({ isActive }) => ({
                        color: isActive ? '#FFD333' : '#868484'
                    })}>
                        Logout
                    </NavLink>
                </div>
                <div className="myaccount-rightside">
                    {rightSideComponent}
                </div>
            </div>
        </>
    )
}

export default MyAccountPageComponent;