import React from "react";
import styled from "styled-components";

const Choose = styled.input.attrs({
    type: 'button',
    value: '찾아보기'
})<{ width?: string }>`
    width: ${(props) => props.width || "fit-content"};
    height: 25px;

    font-size: 12px;
    font-weight: bold;
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid rgb(33, 100, 207);

    &:hover {
        cursor: pointer;
        background-color: whitesmoke;
    }
`

type ButtonChooseProps = {
    width: string;
    onClick: () => void;
}

function ButtonChoose({ width, onClick }: ButtonChooseProps) {
    return (
        <Choose width={width} onClick={onClick}/>
    );
}

export default ButtonChoose;