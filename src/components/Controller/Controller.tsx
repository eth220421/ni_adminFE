import React from 'react'
import styled from 'styled-components'

import ButtonCRUD from '../Buttons/ButtonCRUD'
import { Link } from 'react-router-dom';

const ControllerWrapper = styled.div`
    width: 80%;
    height: 70px;
    border: 2px solid gray;
    border-radius: 10px;

    margin: 0 auto;
    padding: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const AboveDiv = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: start;
`;

const BelowDiv = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: end;
`;

const InputField = styled.div`
    width: 280px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: bold;
`;

const Buttons = styled.div`
    width: 230px;
    height: 30px;

    display: flex;
    align-items: center;
    justify-content: space-around;
`

function Controller() {
    const handleCreate = () => {
        alert("create\nstatistics/popup으로 이동");
    }
    
    const handleRead = () => {
        alert("read\n조회 로직 구현 예정");
    }
    
    const handleUpdate = () => {
        alert("update\n수정 로직 구현 예정");
    }
    
    const handleDelete = () => {
        alert("delete\n삭제 로직 구현 예정");
    }
    
    return (
        <ControllerWrapper>
            <AboveDiv>
                <InputField>
                    인재명 : &nbsp;<input type='text' name='TalName' />
                </InputField>
                <InputField>
                    소속사 : &nbsp;<input type='text' name='agency' />
                </InputField>
            </AboveDiv>
            <BelowDiv>
                <Buttons>
                    <Link to={'./popup'}>
                        <ButtonCRUD str={"신규"} onClick={handleCreate}/>
                    </Link>
                    <ButtonCRUD str={"수정"} onClick={handleUpdate}/>
                    <ButtonCRUD str={"삭제"} onClick={handleDelete}/>
                    <ButtonCRUD str={"조회"} onClick={handleRead}/>
                </Buttons>
            </BelowDiv>
        </ControllerWrapper>
    );
}

export default Controller;