import React from "react";

import Controller from "../components/Controller/Controller";
import TalentChart from "../components/Table/TalentChart";
import styled from "styled-components";

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