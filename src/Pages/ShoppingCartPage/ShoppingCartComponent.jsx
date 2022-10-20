import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CustomSeparator from "../../Components/BreadCrumbsComponent/CustomSeparator";
import CartFooter from "./CartFooter";
import CartTable from "./CartTable";

const ShoppingCartComponent = () => {
    const breadcrumbs = [{ label: 'ShoppingCart' }]
    const { cart } = useSelector(state => state.user.cart)
    return (
        <>
            <CustomSeparator breadcums={breadcrumbs} />
            <Typography fontWeight={700} fontSize={40} style={{ margin: '10px 0px' }}>Shopping Cart</Typography>
            <CartTable />
            <CartFooter />
        </>
    )
}

export default ShoppingCartComponent;