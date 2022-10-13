import axios from "axios";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { getAllProducts } from "../../config/api";
import '../CarouselComponent/css/index.scss'

const CarouselComponent = () => {
    useEffect(() => {
        const items = fetchItems(3)
        console.log(items)
    }, [])

    const fetchItems = async (size) => {
        try {
            const res = await axios(getAllProducts, {
                params: {
                    size: size
                }
            })
            console.log(res.data.data.result)
            return res.data.data.result
        } catch (err) {
            console.log(err)
            return []
        }
    }
    return (
        <>
            <Carousel showThumbs={false} infiniteLoop={true}>
                <div className="carousel-items">
                    <div>
                        Ao khoac dep ($10)
                    </div>
                    <div>
                        <img style={{width : '20%', borderRadius : '5%'}} src="data:image/jpeg;base64,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"/>
                    </div>
                </div>
                <div className="carousel-items">this is slide 2</div>
                <div className="carousel-items">this is slide 3</div>
            </Carousel>
        </>
    )
}

export default CarouselComponent;