import React from "react";
import UserComponent from "../UserComponent/UserComponent";
import MyAccountPageComponent from "./MyAccountPageComponent";
import MyOrderTable from "./MyOrderTable";

const OrderHistoryPage = () => {

    return (
        <>
            <UserComponent component={< MyAccountPageComponent style={{ height: '474px' }} rightSideComponent={<MyOrderTable label={'Order History'} />} />} />
        </>
    )
}
export default OrderHistoryPage;