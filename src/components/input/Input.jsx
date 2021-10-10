import React from 'react'
import styled from 'styled-components'

const InputField = styled.input`
    border: none;
    border-bottom: 2px solid #000;
    width: 80%;
    padding: 12px 20px;
    margin: 15px 0;
    margin-top: 2rem;
    outline: none;
    ::placeholder {
       font-size: 20px;
       color:#000;

   }
`

const Input = ({type,placeholder}) => (
    
    <InputField type={type} placeholder={placeholder}/>
)

export default Input