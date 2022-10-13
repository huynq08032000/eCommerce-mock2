import React from "react";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import LastestProductComponent from "../../Components/LastestProductsComponent/LastestProductsComponent";
import '../css/index.scss'
const HomePage = () => {

    return (
        <>
            <HeaderComponent />
            <div className="main-container">
                <CarouselComponent />
                <LastestProductComponent/>
                HomePage
            </div>

        </>
    )
}

export default HomePage;