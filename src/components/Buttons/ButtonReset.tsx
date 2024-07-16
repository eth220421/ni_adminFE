import React from 'react'
import styled from 'styled-components'

const Reset = styled.input.attrs({
    type: 'button',
    name: 'Btn_Reset',
    value: '초기화'
})`
    width: fit-content;
    height: 30px;

    border: 1px solid lightgray;
    border-radius: 3px;

    background-color: whitesmoke;
    font-weight: bold;

    &:hover {
        cursor: pointer;
        background-color: #e2e2e2;
    }
`

type ButtonResetProps = {
    onClick?: () => void;
}

function ButtonReset({ onClick }: ButtonResetProps) {
    return (
        <Reset onClick={onClick}/>
    );
}

export default ButtonReset;