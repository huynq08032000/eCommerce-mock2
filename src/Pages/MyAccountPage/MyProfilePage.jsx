import React from "react";
import UserComponent from "../UserComponent/UserComponent";
import MyAccountPageComponent from "./MyAccountPageComponent";
import MyProfileComponent from "./MyProfileComponent";

const MyProfilePage = () => {

    return (
        <>
            <UserComponent component={< MyAccountPageComponent rightSideComponent={<MyProfileComponent />} />} />
        </>
    )
}

export default MyProfilePage;