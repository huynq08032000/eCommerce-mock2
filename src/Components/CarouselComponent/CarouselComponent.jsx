import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import '../CarouselComponent/css/index.scss'

const CarouselComponent = () => {

    return (
        <>
            <Carousel showThumbs={false} infiniteLoop={true}>
                <div className="carousel-items">this is slide 1</div>
                <div className="carousel-items">this is slide 2</div>
                <div className="carousel-items">this is slide 3</div>
            </Carousel>
        </>
    )
}

export default CarouselComponent;