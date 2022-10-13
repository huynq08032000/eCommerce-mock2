import React from "react";
import "../HeaderComponent/css/index.scss"
import SearchComponent from '../HeaderComponent/ChildComponent/SearchComponent/SearchComponent'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const HeaderComponent = () => {

    return (
        <>
            <div className="header-container" >
                <div className="left-side">
                    <div className="title">Proshop</div>
                    <div>
                        <SearchComponent />
                    </div>
                </div>
                <div className="right-side">
                    <div className="child-items"><ShoppingCartIcon fontSize="15px" style={{margin : '0 5px'}}/>Cart</div>
                    <div className="child-items"><PersonIcon fontSize="15px" style={{margin : '0 5px'}}/>Signin</div>
                </div>
            </div>
        </>
    )
}

export default HeaderComponent;