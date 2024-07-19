import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Controller from "../components/Controller/Controller";
import TalentChart from "../components/Table/TalentChart";
import { TalentObj } from "../interfaces/TalentObj";
import { mapAllTalent } from "../apis/services/mapAllTalent";

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
  const [checkTalent, setCheckTalent] = useState<TalentObj | null>(null);

  // 초기 렌더링 시 모든 회원 정보 출력
  useEffect(() => {
    const fetchData = async () => {
      // GET All Talent
      const dataList: TalentObj[] = await mapAllTalent();
      setTalents(dataList);
    }

    fetchData();
  }, [])
  
  return (
    <TalentPageWrapper>
      <Div>
        <Controller setTalents={setTalents} checkTalent={checkTalent}/>
      </Div>
      <Div>
        <TalentChart talents={talents} setCheckTalent={setCheckTalent}/>
      </Div>
    </TalentPageWrapper>
  );
}

export default TalentPage;
