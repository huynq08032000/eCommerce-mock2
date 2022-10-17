import React from "react";
import BenefitComponent from "../../Components/BenefitComponent/BenefitComponent";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";
import CategoriesComponent from "../../Components/CategoriesComponent/CatogiresComponent";
import LastestProductComponent from "../../Components/LastestProductsComponent/LastestProductsComponent";
import '../css/index.scss'
import '../Homepage/css/homepage.scss'

const HomeComponent = () => {

    return (
        <>
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
            <BenefitComponent />
            <LastestProductComponent />
        </>
    )
}

export default HomeComponent;