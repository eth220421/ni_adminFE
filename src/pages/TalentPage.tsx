import React, { useState } from "react";
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
  const [talents, setTalents] = useState<TalentObj[]>([]);
  
  return (
    <TalentPageWrapper>
      <Div>
        <Controller setTalents={setTalents}/>
      </Div>
      <Div>
        <TalentChart talents={talents}/>
      </Div>
    </TalentPageWrapper>
  );
}

export default TalentPage;
