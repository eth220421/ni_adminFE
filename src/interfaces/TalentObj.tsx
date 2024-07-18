export interface TalentObj {
  // 물음표 안 붙은 properties는 필수 입력 정보
  id?: number;
  koreanName: string;  // 이름 (*)
  englishName?: string;  // 영문 이름
  residentNumberFront?: string;  // 주민번호 앞 6자리
  residentNumberBack?: string;  // 주민번호 뒤 7자리
  nationality?: string;  // 국적
  phoneNumberFront?: string;  // 앞 전화번호
  phoneNumberMiddle?: string;  // 중간 전화번호
  phoneNumberBack?: string;  // 뒤 전화번호
  birthDate?: string;  // 생년월일
  address: string;  // 주소 (*)
  email: string;  // 이메일 (*)
  qualificationType: string;  // 자격 구분 (*)
  qualificationCode?: string;  // 자격 코드
  company: string;  // 소속사 (*)
  major?: string;  // 전공
  additionalSkills?: string;  // 기타 기술
  evaluationCode: string;  // 평가 코드 (*)
  evaluationContent?: string;  // 평가 내용
  isBlacklisted?: string;  // 블랙리스트 유무
  blacklistReason?: string;  // 블랙리스트 사유
  profile?: string;  // 프로필
}
