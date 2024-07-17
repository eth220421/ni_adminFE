export interface TalentObj {
  // 물음표 안 붙은 properties는 필수 입력 정보
  korName: string;  // 이름 (*)
  engName?: string;  // 영문 이름
  ssnFront?: string;  // 주민번호 앞 6자리
  ssnBack?: string;  // 주민번호 뒤 7자리
  national?: string;  // 국적
  phoneFront?: string;  // 앞 전화번호
  phoneMiddle?: string;  // 중간 전화번호
  phoneBack?: string;  // 뒤 전화번호
  birthday?: string;  // 생년월일
  address: string;  // 주소 (*)
  email: string;  // 이메일 (*)
  qualification: string;  // 자격 구분 (*)
  acquireDay?: string;  // 자격 코드
  company: string;  // 소속사 (*)
  major?: string;  // 전공
  skill?: string;  // 기타 기술
  assessCode: string;  // 평가 코드 (*)
  assessContent?: string;  // 평가 내용
  bListIsChecked?: boolean;  // 블랙리스트 유무
  bListReason?: string;  // 블랙리스트 사유
  profile?: string;  // 프로필
}
