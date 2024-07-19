import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import ButtonZipCode from "../Buttons/ButtonZipCode";
import ButtonChoose from "../Buttons/ButtonChoose";
import ButtonReset from "../Buttons/ButtonReset";
import ButtonApply from "../Buttons/ButtonApply";
import { TalentInfoProps } from "../../interfaces/TalentInfoProps";
import { FaSistrix } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { TalentObj } from "../../interfaces/TalentObj";
import { createTalent } from "../../apis/api/CREATE/createTalent";
import { updateTalent } from "../../apis/api/UPDATE/updateTalent";

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

function TalentInfo({ valueApply, checkTalent }: TalentInfoProps) {
  // 화면 전환을 위한 객체
  const navigate = useNavigate();

  // form 초기화를 위한 useRef 추가
  const formRef = useRef<HTMLFormElement | null>(null);

  // 상태를 객체 형태로 관리
  const [formData, setFormData] = useState({
    koreanName: '',
    englishName: '',
    residentNumberFront: '',
    residentNumberBack: '',
    nationality: '',
    phoneNumberFront: '',
    phoneNumberMiddle: '',
    phoneNumberBack: '',
    birthDate: '',
    address: '',
    email: '',
    qualificationType: '',
    qualificationCode: '',
    company: '',
    major: '',
    additionalSkills: '',
    evaluationCode: '',
    evaluationContent: '',
    isBlacklisted: false,
    blacklistReason: '',
    profile: '',
  });

  // 인재 정보 rendering
  useEffect(() => {
    if (checkTalent) {
      setFormData({
        koreanName: checkTalent.koreanName,
        englishName: checkTalent.englishName || '',
        residentNumberFront: checkTalent.residentNumberFront || '',
        residentNumberBack: checkTalent.residentNumberBack || '',
        nationality: checkTalent.nationality || '',
        phoneNumberFront: checkTalent.phoneNumberFront || '',
        phoneNumberMiddle: checkTalent.phoneNumberMiddle || '',
        phoneNumberBack: checkTalent.phoneNumberBack || '',
        birthDate: checkTalent.birthDate || '',
        address: checkTalent.address,
        email: checkTalent.email,
        qualificationType: checkTalent.qualificationType,
        qualificationCode: checkTalent.qualificationCode || '',
        company: checkTalent.company,
        major: checkTalent.major || '',
        additionalSkills: checkTalent.additionalSkills || '',
        evaluationCode: checkTalent.evaluationCode,
        evaluationContent: checkTalent.evaluationContent || '',
        isBlacklisted: checkTalent.isBlacklisted === 'O',
        blacklistReason: checkTalent.blacklistReason || '',
        profile: checkTalent.profile || '',
      });
    }
  }, [valueApply, checkTalent]);

  // 초기화 버튼 로직
  const handleReset = () => {
    if (formRef.current) {
      formRef.current.reset();
      setFormData({
        koreanName: '',
        englishName: '',
        residentNumberFront: '',
        residentNumberBack: '',
        nationality: '',
        phoneNumberFront: '',
        phoneNumberMiddle: '',
        phoneNumberBack: '',
        birthDate: '',
        address: '',
        email: '',
        qualificationType: '',
        qualificationCode: '',
        company: '',
        major: '',
        additionalSkills: '',
        evaluationCode: '',
        evaluationContent: '',
        isBlacklisted: false,
        blacklistReason: '',
        profile: '',
      });
    }
  };

  // 우편번호 검색 버튼 클릭 시
  const handleZipCode = () => {
    alert("우편번호 검색 클릭");
  };

  // 찾아보기 버튼 클릭 시
  const handleChoose = () => {
    alert("찾아보기 클릭");
  };

  // 등록신청 or 수정 버튼 클릭 시
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formRef.current && formRef.current.checkValidity()) {
      const ourTalent: TalentObj = {
        ...formData,
        isBlacklisted: formData.isBlacklisted ? 'O' : 'X',
      };

      if (checkTalent) {
        // PUT Talent
        updateTalent({
          ourTalent: ourTalent,
          ourTalentId: checkTalent.id || 0,
          navigate,
        });
      } else {
        // POST New Talent
        createTalent({ newTalent: ourTalent, navigate });
      }
    }
  };

  const updateField = (field: string, value: any) => {
    setFormData(prevState => ({ ...prevState, [field]: value }));
  };

  return (
    <TalentInfoWrapper>
      {/* formId와 formRef는 신청과 초기화를 위해 필요 */}
      <form id="talentInfo" ref={formRef} onSubmit={handleSubmit}>
        <Table>
          <tbody>
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
                <Input
                  type="text"
                  name="korName"
                  width="80%"
                  required={true}
                  value={formData.koreanName}
                  onChange={(e) => updateField('koreanName', e.target.value)}
                />
              </TableCell>
              <TableCell width="24%">영문명</TableCell>
              <TableCell width="35%" alignment="left">
                <Input
                  type="text"
                  name="engName"
                  width="100%"
                  value={formData.englishName}
                  onChange={(e) => updateField('englishName', e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>주민번호</TableCell>
              <TableCell alignment="left">
                <Input
                  type="text"
                  name="ssnFront"
                  width="40%"
                  value={formData.residentNumberFront}
                  onChange={(e) => updateField('residentNumberFront', e.target.value)}
                />
                <span style={{ marginInline: "5px" }}>-</span>
                <Input
                  type="password"
                  name="ssnBack"
                  width="45%"
                  value={formData.residentNumberBack}
                  onChange={(e) => updateField('residentNumberBack', e.target.value)}
                />
              </TableCell>
              <TableCell>국적</TableCell>
              <TableCell alignment="left">
                <Input
                  type="text"
                  name="national"
                  width="100%"
                  value={formData.nationality}
                  onChange={(e) => updateField('nationality', e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>*</TableCell>
              <TableCell>전화번호</TableCell>
              <TableCell alignment="left">
                <select
                  name="phoneFront"
                  value={formData.phoneNumberFront}
                  onChange={(e) => updateField('phoneNumberFront', e.target.value)}
                >
                  <option value={"010"}>010</option>
                  <option value={"011"}>011</option>
                  <option value={"016"}>016</option>
                  <option value={"017"}>017</option>
                </select>
                <span style={{ marginInline: "5px" }}>-</span>
                <Input
                  type="text"
                  name="phoneMiddle"
                  width="25%"
                  required={true}
                  value={formData.phoneNumberMiddle}
                  onChange={(e) => updateField('phoneNumberMiddle', e.target.value)}
                />
                <span style={{ marginInline: "5px" }}>-</span>
                <Input
                  type="text"
                  name="phoneBack"
                  width="25%"
                  required={true}
                  value={formData.phoneNumberBack}
                  onChange={(e) => updateField('phoneNumberBack', e.target.value)}
                />
              </TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>
                <Input
                  type="date"
                  width="100%"
                  name="birthday"
                  alignment="center"
                  value={formData.birthDate}
                  onChange={(e) => updateField('birthday', e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>*</TableCell>
              <TableCell>주소</TableCell>
              <TableCell alignment="left" colSpan={2}>
                <Input
                  type="text"
                  name="address"
                  width="100%"
                  required={true}
                  value={formData.address}
                  onChange={(e) => updateField('address', e.target.value)}
                />
              </TableCell>
              <TableCell alignment="right">
                <ButtonZipCode onClick={handleZipCode} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>*</TableCell>
              <TableCell>이메일</TableCell>
              <TableCell alignment="left" colSpan={2}>
                <Input
                  type="text"
                  name="email"
                  width="100%"
                  required={true}
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>*</TableCell>
              <TableCell>자격구분</TableCell>
              <TableCell alignment="left">
                <Input
                  width="80%"
                  name="qualification"
                  required={true}
                  value={formData.qualificationType}
                  onChange={(e) => updateField('qualificationType', e.target.value)}
                />
              </TableCell>
              <TableCell>기사취득년월</TableCell>
              <TableCell>
                <Input
                  type="date"
                  width="100%"
                  name="acquireDay"
                  alignment="center"
                  value={formData.qualificationCode}
                  onChange={(e) => updateField('qualificationCode', e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>*</TableCell>
              <TableCell>소속사</TableCell>
              <TableCell alignment="left">
                <Div alignment="left">
                  <Input
                    width="60%"
                    name="company"
                    required={true}
                    value={formData.company}
                    onChange={(e) => updateField('company', e.target.value)}
                  />
                  <StyledFaSistrix />
                </Div>
              </TableCell>
              <TableCell>전공</TableCell>
              <TableCell>
                <Input
                  width="100%"
                  name="major"
                  value={formData.major}
                  onChange={(e) => updateField('major', e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>기타 스킬</TableCell>
              <TableCell colSpan={3}>
                <Input
                  type="text"
                  width="100%"
                  name="skill"
                  value={formData.additionalSkills}
                  onChange={(e) => updateField('additionalSkills', e.target.value)}
                />
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
                  value={formData.evaluationCode}
                  onChange={(e) => updateField('evaluationCode', e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>평가내용</TableCell>
              <TableCell colSpan={3} alignment="left">
                <Input
                  type="text"
                  width="100%"
                  name="assessContent"
                  value={formData.evaluationContent}
                  onChange={(e) => updateField('evaluationContent', e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>블랙리스트 여부</TableCell>
              <TableCell colSpan={3} alignment="left">
                <Input
                  type="checkbox"
                  name="bListIsChecked"
                  checked={formData.isBlacklisted}
                  onChange={(e) => updateField('isBlacklisted', e.target.checked)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>블랙 사유</TableCell>
              <TableCell colSpan={3} alignment="left">
                <Input
                  type="text"
                  name="bListReason"
                  width="100%"
                  value={formData.blacklistReason}
                  onChange={(e) => updateField('blacklistReason', e.target.value)}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>프로필</TableCell>
              <TableCell colSpan={3} alignment="left">
                <Div alignment="space-between">
                  <Input
                    type="text"
                    name="profile"
                    width="88%"
                    value={formData.profile}
                    onChange={(e) => updateField('profile', e.target.value)}
                  />
                  <ButtonChoose width="65px" onClick={handleChoose} />
                </Div>
              </TableCell>
            </TableRow>
          </tbody>
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
