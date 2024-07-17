import React from "react";
import styled from "styled-components";

import Controller from "../components/Controller/Controller";
import TalentChart from "../components/Table/TalentChart";
import { TalentObj } from "../interfaces/TalentObj";

const TalentPageWrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Div = styled.div`
  width: 100%;
  height: 100%;

  margin: 20px;
`

// NIM_002
function TalentPage() {
  const talent01: TalentObj = {
    korName: "김영훈",
    address: "경기도 용인시 기흥구 강남대로",
    email: "eth220421@gmail.com",
    qualification: "정보처리기사",
    company: "님버스테크",
    assessCode: "Good",
    bListIsChecked: true
  }

  return (
    <TalentPageWrapper>
      <Div>
        <Controller />
      </Div>
      <Div>
        <TalentChart />
      </Div>
    </TalentPageWrapper>
  );
}

export default TalentPage;
