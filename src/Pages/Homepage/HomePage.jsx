import React from "react";
import BenefitComponent from "../../Components/BenefitComponent/BenefitComponent";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";
import CategoriesComponent from "../../Components/CategoriesComponent/CatogiresComponent";
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
                        <CategoriesComponent />
                    </div>
                    <div className="right-side-home">
                        <div className="child-carousel-header">
                            <CarouselComponent />
                        </div>
                        <div className="child-carousel-footer">
                            <div className="child-carouse-footer-items"><CarouselComponent /></div>
                            <div className="child-carouse-footer-items"><CarouselComponent /></div>
                            <div className="child-carouse-footer-items"><CarouselComponent /></div>
                        </div>
                    </div>
                </div>
                <BenefitComponent/>
                {/* <CarouselComponent />
                <LastestProductComponent/>
                <FooterComponent label={'Developed by HuyNQ129'}/> */}
            </div>

        </>
    )
}

export default HomePage;