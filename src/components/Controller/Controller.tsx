import React, { useState } from 'react'
import styled from 'styled-components'

import ButtonCRUD from '../Buttons/ButtonCRUD'
import { Link } from 'react-router-dom';
import { getAllTalent } from '../apis/api/getAllTalent';
import { getTalent } from '../apis/api/getTalent';
import { getTalentByCompany } from '../apis/api/getTalentByCompany';
import { getTalentByKoreanNameAndCompany } from '../apis/api/getTalentByKoreanNameAndCompany';
import { deleteTalent } from '../apis/api/deleteTalent';


const ControllerWrapper = styled.div`
    width: 90%;
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

const Div = styled.div<{ alignment?: string }>`
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: ${(props) => props.alignment || "center"};
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
    const [talName, setTalName] = useState('');
    const [company, setCompany] = useState('');

    const handleRead = async () => {
        if (talName.trim() === '' && company.trim() === '') {
            // GET All Talent
            const response = await getAllTalent();
            console.log(response);
        } else if (talName.trim() !== '' && company.trim() === '') {
            // GET Talent By Name
            const response = await getTalent({ talName });
            console.log(response);
        } else if (company.trim() !== '' && talName.trim() === '') {
            // GET Talent By Company
            const response = await getTalentByCompany({ company });
            console.log(response);
        }else if (talName.trim() !== '' && company.trim() !== '') {
            // GET Talent By Name and Company
            const response = await getTalentByKoreanNameAndCompany({ talName, company });
            console.log(response);
        }
    };
    
    const handleDelete = async () => {
        if (talName.trim() === '') {
            alert('삭제할 인재명을 입력해주세요.');
        } else {
            // DELETE Talent By Name
            await deleteTalent({ talName });
            alert('삭제 완료');
        }
    };
    
    return (
        <ControllerWrapper>
            <Div alignment='start'>
                <InputField>
                    인재명 : &nbsp;<input type='text' name='TalName' value={talName} onChange={(e) => setTalName(e.target.value)} />
                </InputField>
                <InputField>
                    소속사 : &nbsp;<input type='text' name='company' value={company} onChange={(e) => setCompany(e.target.value)}/>
                </InputField>
            </Div>
            <Div alignment='end'>
                <Buttons>
                    <Link to={'./popup?valueApply=등록신청'}>
                        <ButtonCRUD valueCRUD={"신규"}/>
                    </Link>
                    {/* 추후 수정 로직 구현 시, 선택한 인재의 ID값 파라미터로 넘겨야함 */}
                    <Link to={'./popup?valueApply=수정'}>
                        <ButtonCRUD valueCRUD={"수정"}/>
                    </Link>
                    <ButtonCRUD valueCRUD={"삭제"} onClick={handleDelete}/>
                    <ButtonCRUD valueCRUD={"조회"} onClick={handleRead}/>
                </Buttons>
            </Div>
        </ControllerWrapper>
    );
}

export default Controller;