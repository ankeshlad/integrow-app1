import React from 'react'
import styled from 'styled-components'

const MainContainer2 = styled.div`
    height: 70vh;
    width:50%;
    margin: auto;
    margin-top: 5%;
    /* border-radius: 1px solid #000; */
    background-color:#fff;
    border-radius:20px;
    
`

const Card2 = (props) => (

    <MainContainer2>
        {props.children}

    </MainContainer2>

    
)

export default Card2