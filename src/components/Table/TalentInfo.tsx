import React, { useRef } from "react";
import styled from "styled-components";

import ButtonZipCode from "../Buttons/ButtonZipCode";
import ButtonChoose from "../Buttons/ButtonChoose";
import ButtonReset from "../Buttons/ButtonReset";
import ButtonApply from "../Buttons/ButtonApply";
import { TalentInfoProps } from '../../interfaces/TalentInfoProps';
import { FaSistrix } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const TalentInfoWrapper = styled.div`
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  font-size: 13px;
  font-weight: bold;
`;

const TableRow = styled.tr`
  height: 40px;
`;

const TableCell = styled.td<{ width?: string; alignment?: string }>`
  width: ${(props) => props.width || "fit-content"};
  height: 100%;

  padding: 5px;
  text-align: ${(props) => props.alignment || "center"};
`;

const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
  name: props.name || undefined,
  required: props.required || false,
}))<{
  type?: string;
  name?: string;
  width?: string;
  required?: boolean;
  alignment?: string;
}>`
  width: ${(props) => props.width || "fit-content"};
  text-align: ${(props) => props.alignment || "left"};
`;

const Div = styled.div<{ alignment?: string }>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: ${(props) => props.alignment || "center"};
`;

const StyledFaSistrix = styled(FaSistrix)`
  width: 20px;
  height: 20px;
  margin-left: 5px;

  &:hover {
    cursor: pointer;
  }
`;

function TalentInfo({ valueApply }: TalentInfoProps) {
  // 화면 전환을 위한 객체
  const navigate = useNavigate();

  // form 초기화를 위한 useRef 추가
  const formRef = useRef<HTMLFormElement | null>(null);

  // 초기화 버튼 로직
  const handleReset = () => {
    // 현재 formRef 중 값이 있는게 있다면
    if (formRef.current) {
      formRef.current.reset();
    }
  };

  // 등록신청 or 수정 버튼 로직
  const handleSubmit = (e: React.FormEvent) => {
    // 폼의 기본 제출 동작 억제
    e.preventDefault();

    // e.target을 HTMLFormElement 타입으로 변환 후 저장
    const form = e.target as HTMLFormElement;

    // required 속성을 가진 모든 폼이 작성되었는지 유효성 검사
    if (form.checkValidity()) {
      // {key: value} 형식으로 저장하기 위해 FormData 객체로 생성
      const formData = new FormData(form);
      // {key: value} 형식을 [key, value] 배열 형식으로 변환 후 객체로 변환
      const formValues = Object.fromEntries(formData.entries());
      formValues.bListIsChecked =
        formValues.bListIsChecked === "on" ? "true" : "false";

      // alert창에서 보기 편하게 JSON 형식으로 변환
      alert(valueApply + " 완료 \n" + JSON.stringify(formValues, null, 2));
      navigate(-1);
    } else {
      alert("필수 입력 정보를 작성해주세요.");
    }
  };

  const handleZipCode = () => {
    alert("우편번호 검색 클릭");
  };

  const handleChoose = () => {
    alert("찾아보기 클릭");
  };

  return (
    <TalentInfoWrapper>
      {/* formId와 formRef는 신청과 초기화를 위해 필요 */}
      <form id="talentInfo" ref={formRef} onSubmit={handleSubmit}>
        <Table>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>등록번호</TableCell>
            <TableCell colSpan={3} alignment="left">
              (MAN_ID : 시스템에서 자동 부여)
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell width="1%">*</TableCell>
            <TableCell width="15%">성명</TableCell>
            <TableCell width="35%" alignment="left">
              <Input type="text" name="korName" width="80%" required={true} />
            </TableCell>
            <TableCell width="24%">영문명</TableCell>
            <TableCell width="35%" alignment="left">
              <Input type="text" name="engName" width="100%" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>주민번호</TableCell>
            <TableCell alignment="left">
              <Input type="text" name="ssnFront" width="40%" />
              <span style={{ marginInline: "5px" }}>-</span>
              <Input type="password" name="ssnBack" width="45%" />
            </TableCell>
            <TableCell>국적</TableCell>
            <TableCell alignment="left">
              <Input type="text" name="national" width="100%" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>*</TableCell>
            <TableCell>전화번호</TableCell>
            <TableCell alignment="left">
              <select name="phoneFront">
                <option value={"010"}>010</option>
                <option value={"011"}>011</option>
                <option value={"016"}>016</option>
                <option value={"017"}>017</option>
              </select>
              <span style={{ marginInline: "5px" }}>-</span>
              <Input
                type="password"
                name="phoneMiddle"
                width="25%"
                required={true}
              />
              <span style={{ marginInline: "5px" }}>-</span>
              <Input
                type="password"
                name="phoneBack"
                width="25%"
                required={true}
              />
            </TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>
              <Input
                type="date"
                width="100%"
                name="birthday"
                alignment="center"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>*</TableCell>
            <TableCell>주소</TableCell>
            <TableCell alignment="left" colSpan={2}>
              <Input type="text" name="address" width="100%" required={true} />
            </TableCell>
            <TableCell alignment="right">
              <ButtonZipCode onClick={handleZipCode} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>*</TableCell>
            <TableCell>이메일</TableCell>
            <TableCell alignment="left" colSpan={2}>
              <Input type="text" name="email" width="100%" required={true} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>*</TableCell>
            <TableCell>자격구분</TableCell>
            <TableCell alignment="left">
              <Input width="80%" name="qualification" required={true} />
            </TableCell>
            <TableCell>기사취득년월</TableCell>
            <TableCell>
              <Input
                type="date"
                width="100%"
                name="acquireDay"
                alignment="center"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>*</TableCell>
            <TableCell>소속사</TableCell>
            <TableCell alignment="left">
              <Div alignment="left">
                <Input width="60%" name="company" required={true} />
                <StyledFaSistrix />
              </Div>
            </TableCell>
            <TableCell>전공</TableCell>
            <TableCell>
              <Input width="100%" name="major" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>기타 스킬</TableCell>
            <TableCell colSpan={3}>
              <Input type="text" width="100%" name="skill" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>*</TableCell>
            <TableCell>평가코드</TableCell>
            <TableCell colSpan={3} alignment="left">
              <Input
                type="text"
                width="32%"
                name="assessCode"
                required={true}
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>평가내용</TableCell>
            <TableCell colSpan={3} alignment="left">
              <Input type="text" width="100%" name="assessContent" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>블랙리스트 여부</TableCell>
            <TableCell colSpan={3} alignment="left">
              <Input type="checkbox" name="bListIsChecked" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>블랙 사유</TableCell>
            <TableCell colSpan={3} alignment="left">
              <Input type="text" name="bListReason" width="100%" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>프로필</TableCell>
            <TableCell colSpan={3} alignment="left">
              <Div alignment="space-between">
                <Input type="text" name="profile" width="88%" />
                <ButtonChoose width="65px" onClick={handleChoose} />
              </Div>
            </TableCell>
          </TableRow>
        </Table>
      </form>
      <Div alignment="right">
        <ButtonReset onClick={handleReset} />
        <span style={{ marginInline: "5px" }} />
        <ButtonApply valueApply={valueApply} formId="talentInfo" />
      </Div>
    </TalentInfoWrapper>
  );
}

export default TalentInfo;
