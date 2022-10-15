import React from "react";
import BenefitItem from "./BenefitItem/BenefitItem";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
const benefits = [
    {
        icon : <LocalShippingIcon/>,
        title : 'Free Shipping',
        desc : 'For orders from %50'
    },
    {
        icon : <LocalShippingIcon/>,
        title : 'Free Shipping',
        desc : 'For orders from %50'
    },
    {
        icon : <LocalShippingIcon/>,
        title : 'Free Shipping',
        desc : 'For orders from %50'
    },
    {
        icon : <LocalShippingIcon/>,
        title : 'Free Shipping',
        desc : 'For orders from %50'
    },
]
const BenefitComponent = () => {
    return(
        <>
            <div className="benefit-container" style={{display: 'flex'}}>
                {
                    benefits.map((el, index) => {
                        return(
                            <BenefitItem benefit={el} key={index}/>
                        )
                    })
                }
            </div>
        </>
    )
}

export default BenefitComponent;