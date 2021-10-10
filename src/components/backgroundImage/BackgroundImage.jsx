import React from 'react'
import styled from 'styled-components'
import image from '../../assets/images/backgroundimage.png'

const Image = styled.div`
    height:100vh;
    width: 100vw;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
`
const BackgroundImage = () => (
        <Image />  
)

export default BackgroundImage