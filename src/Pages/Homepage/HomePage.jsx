import React from "react";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";
import FooterComponent from "../../Components/FooterComponent/FooterComponent";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import LastestProductComponent from "../../Components/LastestProductsComponent/LastestProductsComponent";
import '../css/index.scss'
import '../Homepage/css/homepage.scss'
const HomePage = () => {

    return (
        <>
            <HeaderComponent />
            <div className="main-container">
                <div className="home-slider">
                    <div className="left-side-home">

                    </div>
                    <div className="right-side-home">
                        <CarouselComponent />
                    </div>
                </div>
                {/* <CarouselComponent />
                <LastestProductComponent/>
                <FooterComponent label={'Developed by HuyNQ129'}/> */}
            </div>

        </>
    )
}

export default HomePage;