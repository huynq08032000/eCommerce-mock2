import React from "react";
import AdminPage from "../AdminPage";
import UserEditComponent from "./UserEditComponent/UserEditComponent";

const UserEditPage = () => {
    return (
        <>
            <AdminPage component={<UserEditComponent />} />
        </>
    )
}

export default UserEditPage;