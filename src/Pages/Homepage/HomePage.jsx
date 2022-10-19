import React from "react";
import UserComponent from "../UserComponent/UserComponent";
import HomeComponent from "./HomeComponent";
const HomePage = () => {

    return (
        <>
            <UserComponent component={<HomeComponent/>}/>
        </>
    )
}

export default HomePage;