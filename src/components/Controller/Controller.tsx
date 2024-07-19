import React, { useState } from 'react'
import styled from 'styled-components'

import ButtonCRUD from '../Buttons/ButtonCRUD'
import { Link } from 'react-router-dom';
import { deleteTalent } from '../../apis/api/DELETE/deleteTalent';
import { mapAllTalent } from '../../apis/services/mapAllTalent';
import { mapTalentByName } from '../../apis/services/mapTalentByName';
import { mapTalentByCompany } from '../../apis/services/mapTalentByCompany';
import { ControllerProps } from '../../interfaces/ControllerProps';
import { TalentObj } from '../../interfaces/TalentObj';
import { mapTalentByNameAndCompany } from '../../apis/services/mapTalentByNameAndCompany';

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

function Controller({ setTalents }: ControllerProps) {
    const [talName, setTalName] = useState('');
    const [comName, setComName] = useState('');

    // 조회 버튼 클릭 시
    const handleRead = async () => {
        if (talName.trim() === '' && comName.trim() === '') {
            // GET All Talent
            const dataList: TalentObj[] = await mapAllTalent();
            setTalents(dataList);
        } else if (talName.trim() !== '' && comName.trim() === '') {
            // GET Talent By Name
            const data: TalentObj[] = await mapTalentByName({ talName });
            setTalents(data);
        } else if (talName.trim() === '' && comName.trim() !== '') {
            // GET Talent By Company
            const data: TalentObj[] = await mapTalentByCompany({ comName });
            setTalents(data);
        } else if (talName.trim() !== '' && comName.trim() !== '') {
            // GET Talent By Name and Company
            const data: TalentObj[] = await mapTalentByNameAndCompany({ talName, comName });
            setTalents(data);
        }
    };
    
    // 삭제 버튼 클릭 시
    const handleDelete = async () => {
        if (talName.trim() === '') {
            alert('삭제할 인재를 선택해주세요.');
        }
        else {
            // DELETE Talent By Name
            deleteTalent({ talName });
        }
    }
    
    return (
        <div>
        <ControllerWrapper>
            <Div alignment='start'>
                <InputField>
                    인재명 : &nbsp;<input type='text' name='TalName' value={talName} onChange={(e) => setTalName(e.target.value)} />
                </InputField>
                <InputField>
                    소속사 : &nbsp;<input type='text' name='agency' value={comName} onChange={(e) => setComName(e.target.value)} />
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
        </div>
    );
}

export default Controller;