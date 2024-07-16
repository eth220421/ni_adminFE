import React from 'react'
import styled from 'styled-components'

import TalentInfo from '../Table/TalentInfo';

const FormWrapper = styled.div`
    width: 100%;
`

type FormProps = {
    valueApply: string;
}

function Form({ valueApply }: FormProps) {
    return (
        <FormWrapper>
            <TalentInfo valueApply={valueApply} />
        </FormWrapper>
    );
}

export default Form;