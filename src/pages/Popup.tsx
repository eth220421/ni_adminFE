import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import ButtonReset from "../components/Buttons/ButtonReset";
import ButtonRegister from "../components/Buttons/ButtonRegister";

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

const Form = styled.div`
  background-color: whitesmoke;
  width: 80%;
  height: 100%;

  margin: 0 auto;
`

const Buttons = styled.div`
  width: 125px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

// NIM_002_1
function Popup() {
  const navigate = useNavigate();
  
  const handleRegister = () => {
    alert("register\n등록신청 로직 구현 예정");
    navigate(-1);
  }
  
  const handleReset = () => {
    alert("reset\n초기화 로직 구현 예정");
  }

  return (
    <PopupWrapper>
      <Div alignment="center">
        <h3>
          Popup 호출 화면
        </h3>
      </Div>
      <Form>
        article
      </Form>
      <Div alignment="end" marginTop="20px">
        <Buttons>
          <ButtonReset onClick={handleReset}/>
          <ButtonRegister onClick={handleRegister}/>
        </Buttons>
      </Div>
    </PopupWrapper>
  );
}

export default Popup;
