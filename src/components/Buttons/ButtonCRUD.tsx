import React from 'react'
import styled from 'styled-components';

const CRUD = styled.input.attrs({
    type: 'submit',
    name: 'Btn_CRUD'
})`
    width: 50px;
    height: 25px;

    border: 1px solid rgb(141, 186, 220);
    border-radius: 5px;

    color: rgb(141, 186, 220);
    background-color: transparent;

    font-size: 13px;

    &:hover {
        cursor: pointer;
        background-color: whitesmoke;
    }
`
// 넘겨받는 props의 타입 지정
type ButtonCRUDProps = {
    valueCRUD: string;
    onClick?: () => void;
}

function ButtonCRUD({ valueCRUD, onClick }: ButtonCRUDProps) {
    return (
        <CRUD value={valueCRUD} onClick={onClick}/>
    );
}

export default ButtonCRUD;