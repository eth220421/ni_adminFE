import React from 'react'
import styled from 'styled-components'

const Register = styled.input.attrs({
    type: 'submit',
    name: 'Btn_Register',
    value: '등록신청'
})`
    width: fit-content;
    height: 30px;

    border: 1px solid rgb(75, 141, 248);
    border-radius: 3px;

    background-color: rgb(75, 141, 248);
    color: white;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: rgb(58, 123, 228);
        border: 1px solid rgb(58, 123, 228);
    }
`

type ButtonRegisterProps = {
    onClick?: () => void;
}

function ButtonRegister({ onClick }: ButtonRegisterProps) {
    return (
        <Register onClick={onClick}/>
    );
}

export default ButtonRegister;