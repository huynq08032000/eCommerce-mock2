import React from "react";
import AdminPage from "../AdminPage";
import UserAddComponent from "./UserAddComponent/UserAddComponent";

const UserAddPage = () => {
    return (
        <>
            <AdminPage component={<UserAddComponent />} />
        </>
    )
}

export default UserAddPage;