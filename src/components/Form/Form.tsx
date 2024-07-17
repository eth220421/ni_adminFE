import React from 'react'
import styled from 'styled-components'

import TalentInfo from '../Table/TalentInfo';
import { FormProps } from '../../interfaces/FormProps';

const FormWrapper = styled.div`
    width: 100%;
`

function Form({ valueApply }: FormProps) {
    return (
        <FormWrapper>
            <TalentInfo valueApply={valueApply} />
        </FormWrapper>
    );
}

export default Form;