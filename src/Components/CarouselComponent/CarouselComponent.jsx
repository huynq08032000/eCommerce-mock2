import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { fetchProductCarousel } from "../../redux/ProductsSlice";
import '../CarouselComponent/css/index.scss'

const CarouselComponent = ({style}) => {
    const dispatch = useDispatch()
    const { isLoading, carouselProducts } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProductCarousel({
            size: 3,
            sortBy: 'id',
            order: 'ASC'
        }))
    }, [])
    return (
        <>
            {
                isLoading ? <>Loading....</> : <Carousel showThumbs={false} infiniteLoop={true}>
                    {carouselProducts.map(el => {
                        return <div className="carousel-items" key={el.id} style={style}>
                            <div className="title">
                                {el.name} (${el.price})
                            </div>
                            <div className="image">
                                <img style={{ maxWidth: '200px', borderRadius: '50%', margin: '25px' }} src={el.images[0] ? el.images[0].url : ''} />
                            </div>
                        </div>
                    })}
                </Carousel>
            }

        </>
    )
}

export default CarouselComponent;