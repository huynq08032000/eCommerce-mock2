import React from "react";
import AdminPage from "../AdminPage";
import UserListComponent from "./UserListComponent/UserListComponent";

const UserListPage = () => {
    return (
        <>
            <AdminPage component={<UserListComponent />} />
        </>
    )
}
export default UserListPage;