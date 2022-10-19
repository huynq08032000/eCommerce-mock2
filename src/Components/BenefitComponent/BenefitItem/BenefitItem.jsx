import React from "react";
import './index.scss'
const BenefitItem = ({benefit}) => {

    return(
        <>
            <div className="card-benefit-item">
                <div className="benefit-item-container">
                    <div className="benefit-item-image">
                        {benefit.icon}
                    </div>
                    <div className="benefit-item-content">
                        <div className="benefit-title">{benefit.title}</div>
                        <div className="benefit-desc">{benefit.desc}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BenefitItem