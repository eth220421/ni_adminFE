import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ButtonCRUD from '../Buttons/ButtonCRUD';
import { Link, useNavigate } from 'react-router-dom';
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
`;

const Div = styled.div<{ alignment?: string }>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: ${(props) => props.alignment || 'center'};
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
`;

function Controller({ setTalents, checkTalent }: ControllerProps) {
  const navigate = useNavigate();
  const [talName, setTalName] = useState('');
  const [comName, setComName] = useState('');

  // 수정 버튼 클릭 시
  const handleUpdate = () => {
    // 수정할 인재 선택되었는지 검사
    if (!checkTalent) {
        alert("수정할 인재를 선택해주세요.");
        return;
    } else {
        navigate(
            './popup',
            { state: {title: '수정', valueApply: '수정', checkTalent: checkTalent} }
        );
    }
  }

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
    const talId = checkTalent?.id;

    // 체크한 인재가 없어 error 발생 시에만 response 반환
    const response = await deleteTalent({ talId })
    if (response) {
        alert("삭제할 인재를 선택해주세요.");
    }

    // 삭제 작업 후 인재 리스트 리렌더링
    handleRead();
  };

  return (
    <div>
      <ControllerWrapper>
        <Div alignment="start">
          <InputField>
            인재명 : &nbsp;
            <input
              type="text"
              name="TalName"
              value={talName}
              onChange={(e) => setTalName(e.target.value)}
            />
          </InputField>
          <InputField>
            소속사 : &nbsp;
            <input
              type="text"
              name="agency"
              value={comName}
              onChange={(e) => setComName(e.target.value)}
            />
          </InputField>
        </Div>
        <Div alignment="end">
          <Buttons>
            <Link
                to={'./popup'}
                state={{
                    title: '등록',
                    valueApply: '등록신청'
                }}
            >
              <ButtonCRUD valueCRUD="신규" />
            </Link>
            <ButtonCRUD valueCRUD="수정" onClick={handleUpdate}/>
            <ButtonCRUD valueCRUD="삭제" onClick={handleDelete} />
            <ButtonCRUD valueCRUD="조회" onClick={handleRead} />
          </Buttons>
        </Div>
      </ControllerWrapper>
    </div>
  );
}

export default Controller;
