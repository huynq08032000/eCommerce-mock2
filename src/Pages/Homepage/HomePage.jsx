import React from "react";
import CarouselComponent from "../../Components/CarouselComponent/CarouselComponent";
import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";
import '../css/index.scss'
const HomePage = () => {

    return (
        <>
            <HeaderComponent />
            <div className="main-container">
                <CarouselComponent />
                HomePage
            </div>

        </>
    )
}

export default HomePage;