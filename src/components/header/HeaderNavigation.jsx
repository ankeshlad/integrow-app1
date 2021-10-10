import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/images/bg-1.png'

const MainContainer = styled.div`
    width: 100%;
    height: 30%;
    text-align: center;
`
const SubContainer = styled.div`
   display: flex;
    flex-direction: row;
    width: 100%;
    
    border-left-width: 0 !important;
    border-right-width: 0 !important;
`
const LogoContainer =styled.div`
    width: auto;
`
const Img = styled.img`
    width: 80%;
`

const HeaderNavigation = () => {
    
    return(
        <MainContainer>
            <SubContainer>
                <LogoContainer>
                    <Img src={logo} />
                </LogoContainer>
            </SubContainer>
        </MainContainer>

    )
}

export default HeaderNavigation
