import React from "react";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
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
                <FooterComponent label={'Developed by HuyNQ129'}/>
            </div>

        </>
    )
}

export default HomePage;