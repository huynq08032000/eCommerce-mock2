import React from "react";
import UserComponent from "../UserComponent/UserComponent";
import CheckOutComponent from "./CheckOutComponent";

const CheckOutPage = () => {

    return (
        <UserComponent component={<CheckOutComponent />} />
    )
}

export default CheckOutPage;