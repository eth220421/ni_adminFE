import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Form from "../components/Form/Form";

const PopupWrapper = styled.div`
  width: 100%;
  height: 100%;

`

const Div = styled.div<{alignment?: string, marginTop?: string}>`
  width: 80%;
  height: 100%;

  margin: 0 auto;
  margin-top: ${(props) => props.marginTop || "0px"};

  display: flex;
  align-items: center;
  justify-content: ${(props) => props.alignment || "start"};
`

// NIM_002_1
function Popup() {
  // Controller.tsx로부터 넘겨받는 props를 위한 객체
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  // URLSearchParamsdml의 .get()은 파라미터가 없을 경우를 대비해 string || null 형태로 리턴
  // 그래서 || "" 작성 필요
  const valueApply = params.get("valueApply") || "";

  return (
    <PopupWrapper>
      <Div alignment="center">
        <h3>
          Popup 호출 화면
        </h3>
      </Div>
      <Div>
        <Form valueApply={valueApply} />
      </Div>
    </PopupWrapper>
  );
}

export default Popup;
