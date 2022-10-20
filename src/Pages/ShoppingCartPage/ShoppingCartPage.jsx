import React from "react";
import UserComponent from "../UserComponent/UserComponent";
import ShoppingCartComponent from "./ShoppingCartComponent";

const ShoppingCartPage = () => {

    return (
        <UserComponent component={<ShoppingCartComponent />} />
    )
}

export default ShoppingCartPage; 