import React from "react";
import styled from "styled-components";

const TitleComponent = styled.h2`
    font-size : 20px;
    text-transform : uppercase;
    color : #000000;
    letter-spacing : 3px;
    margin : 5px 0px 20px;
`

const Title = ({label}) => {
    return(
        <TitleComponent>
            {label}
        </TitleComponent>
    )
}

export default Title;