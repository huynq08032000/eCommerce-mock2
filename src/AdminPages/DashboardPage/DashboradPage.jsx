import React from "react";
import AdminPage from "../AdminPage";
import DashboardComponent from "./DashboradComponent";

const DashboardPage = () => {
    return (
        <>
            <AdminPage component={<DashboardComponent />} />
        </>
    )
}
export default DashboardPage;