import React from "react";
import styled from "styled-components";
import './index.scss'

const TitleComponent = styled.h2`
    font-size : 22px;
    color : #000000;
    padding : 10px 25px;
    display : flex;
    justify-content : space-between;
    font-weight : 700;
`

const Title = ({ label, href }) => {
    return (
        <TitleComponent>
            <div>
                {label}
            </div>
            <div className="show-more">
                Show more...
            </div>
        </TitleComponent>
    )
}

export default Title;