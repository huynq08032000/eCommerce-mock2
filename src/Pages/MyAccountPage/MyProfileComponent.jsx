import React from "react";
import './css/index.scss'
import MyOrderTable from "./MyOrderTable";
import MyProfileDetailComponent from "./MyProfileDetailComponent";
const MyProfileComponent = () => {

    return (
        <>
            <div className="myprofile-detail">
                <MyProfileDetailComponent />
            </div>
            <div className="myprofile-order">
                <MyOrderTable label={'Recent Orders'} />
            </div>
        </>
    )
}

export default MyProfileComponent;