import React from "react";
import "../HeaderComponent/css/index.scss"
import SearchComponent from '../HeaderComponent/ChildComponent/SearchComponent/SearchComponent'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const HeaderComponent = () => {
    const arrHeader = [
        {
            title: 'About us'
        },
        {
            title: 'Contact'
        },
        {
            title: 'Store',
        },
        {
            title: 'Track Orders'
        }
    ]
    return (
        <>
            <div className="header-container-temp">
                {
                    arrHeader.map((el, index) => {
                        return (
                            <div className="items" key={index}>
                                {el.title}
                            </div>
                        )
                    })
                }
            </div>
            <div className="container">
                <div className="header-container" >
                    <div className="left-side">
                        <div className="title">Shop app</div>
                    </div>
                    <div className="middle-side">
                        <SearchComponent />
                    </div>
                    <div className="right-side">
                        <div className="child-items"><ShoppingCartOutlinedIcon style={{ margin: '0 5px' }} /></div>
                        <div className="child-items"><PersonOutlineOutlinedIcon style={{ margin: '0 5px' }} /></div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default HeaderComponent;