import React from "react";
import styled from "styled-components";

import { ButtonZipCodeProps } from '../../interfaces/ButtonZipCodeProps';

const ZipCode = styled.input.attrs({
    type: 'button',
    value: '우편번호 검색'
})`
    width: 120px;
    height: 25px;

    background-color: rgb(58, 123, 228);
    color: white;
    font-weight: bold;
    
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: rgb(33, 100, 207);
        cursor: pointer;
    }
`
function ButtonZipCode({ onClick }: ButtonZipCodeProps) {
    return (
        <ZipCode onClick={onClick}/>
    );
}

export default ButtonZipCode;