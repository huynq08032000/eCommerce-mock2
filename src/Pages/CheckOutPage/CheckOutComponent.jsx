import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CustomSeparator from "../../Components/BreadCrumbsComponent/CustomSeparator";
import CheckOutTable from "./CheckOutTable";
import ShippingInformationComponent from "./ShippingInformationComponent";

const CheckOutComponent = () => {

    const { user, cart } = useSelector(state => state.user)

    return (
        <>
            <CustomSeparator breadcums={[{ label: 'Shopping Cart', href: '/shoppingcart' }, { label: 'Checkout' }]} />
            <Typography fontSize={40} fontWeight={700} lineHeight={'47px'} sx={{ marginTop: '20px' }}>Checkout</Typography>
            <div className="checkout-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div className="checkout-left-side" style={{ maxWidth: '765px' }}>
                    <CheckOutTable />
                </div>
                <div className="checkout-right-side" style={{ width: 400, backgroundColor: '#fff' }}>
                    <div>
                        <ShippingInformationComponent />
                    </div>
                    <div>
                        Checkout
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckOutComponent;