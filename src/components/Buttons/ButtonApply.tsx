import React from 'react'
import styled from 'styled-components'

import { ButtonApplyProps } from '../../interfaces/ButtonApplyProps';

const Apply = styled.button`
    width: 70px;
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

function ButtonApply({ valueApply, formId }: ButtonApplyProps) {
    return (
        <Apply type="submit" form={formId}>
            {valueApply}
        </Apply>
    );
}

export default ButtonApply;