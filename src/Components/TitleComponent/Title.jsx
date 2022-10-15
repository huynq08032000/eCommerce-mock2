import React from "react";
import styled from "styled-components";
import './index.scss'

const TitleComponent = styled.h2`
    font-size : 20px;
    text-transform : uppercase;
    color : #000000;
    letter-spacing : 3px;
    padding : 10px;
    display : flex;
    justify-content : space-between;
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