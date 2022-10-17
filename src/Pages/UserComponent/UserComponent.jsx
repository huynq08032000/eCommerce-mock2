import React from "react";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import '../css/index.scss'

const UserComponent = ({component}) => {
    return(
        <>
            <HeaderComponent/>
            <div className="main-container">
                {component}
                <FooterComponent/>
            </div>
        </>
    )
}
export default UserComponent;