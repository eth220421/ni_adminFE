import React from 'react'
import styled from 'styled-components'

import TalentInfo from '../Table/TalentInfo';
import { FormProps } from '../../interfaces/FormProps';

const FormWrapper = styled.div`
    width: 100%;
`

function Form({ valueApply, checkTalent }: FormProps) {
    return (
        <FormWrapper>
            <TalentInfo valueApply={valueApply} checkTalent={checkTalent} />
        </FormWrapper>
    );
}

export default Form;