import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import Form from '../components/Form/Form';
import { TalentObj } from '../interfaces/TalentObj';

const PopupWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Div = styled.div<{ alignment?: string; marginTop?: string }>`
  width: 80%;
  height: 100%;

  margin: 0 auto;
  margin-top: ${(props) => props.marginTop || '0px'};

  display: flex;
  align-items: center;
  justify-content: ${(props) => props.alignment || 'start'};
`;

function Popup() {
  const location = useLocation();

  // Controller.tsx로부터 넘어오는 state 객체 할당
  const title = location.state.title as string;
  const valueApply = location.state.valueApply as string;
  const checkTalent = location.state.checkTalent as TalentObj;

  console.log(checkTalent);

  return (
    <PopupWrapper>
      <Div alignment="center">
        <h3>인재 정보 {title}</h3>
      </Div>
      <Div>
        <Form valueApply={valueApply} checkTalent={checkTalent}/>
      </Div>
    </PopupWrapper>
  );
}

export default Popup;
