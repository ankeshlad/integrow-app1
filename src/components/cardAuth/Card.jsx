import React from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
    height: 90vh;
    width:50%;
    margin: auto;
    margin-top: 5%;
    /* border-radius: 1px solid #000; */
    background-color:#fff;
`

const Card = (props) => (

    <MainContainer>
        {props.children}

    </MainContainer>

    
)

export default Card