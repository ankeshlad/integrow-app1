import React from 'react'
import styled from 'styled-components'
import image from '../../assets/images/backgroundimage.png'

const Image1 = styled.div`
    height:200vh;
    width: 100vw;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-size: cover;
`
const BackgroundImgReg = () => (
        <Image1 />  
)

export default BackgroundImgReg