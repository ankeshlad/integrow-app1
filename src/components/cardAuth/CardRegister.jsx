import React from 'react'
import styled from 'styled-components'

const MainContainer1 = styled.div`
    height: 167vh;
    width:50%;
    margin: auto;
    margin-top: 5%;
    /* border-radius: 1px solid #000; */
    background-color:#fff;
    border-radius:20px;
    
`

const Card1 = (props) => (

    <MainContainer1>
        {props.children}

    </MainContainer1>

    
)

export default Card1