import React from 'react'
import styled from 'styled-components'
import { TalentObj } from '../../interfaces/TalentObj';

const TalentChartWrapper = styled.div`
    width: 90%;
    height: 500px;

    margin: 0 auto;
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;

    font-size: 13px;
`;

const TableRow = styled.tr<{ backgroundColor?: string; fontColor?: string, fontSize?: string }>`
    height: 30px;

    background-color: ${(props) => props.backgroundColor || 'transparent'};
    color: ${(props) => props.fontColor || 'black'};
    font-size: ${(props) => props.fontSize || '12px'};
`

const TableCell = styled.td`
    width: fit-content;
    height: 100%;

    padding: 5px;
    text-align: center;
    border: 1px solid black;
`

interface TalentChartProps {
    talents: TalentObj[];
}

// 만 나이 계산 함수
const calculateAge = (birthDate?: string): number => {
    if (!birthDate) {
        return 0;
    }

    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
    ) {
        age--;
    }
    return age;
};

const TalentChart: React.FC<TalentChartProps> = ({ talents }) => {
    return (
        <TalentChartWrapper>
            <Table>
                <TableRow backgroundColor='rgb(48, 84, 150)' fontColor='white' fontSize='13px'>
                    <TableCell>▣</TableCell>
                    <TableCell>ID</TableCell>
                    <TableCell>성명</TableCell>
                    <TableCell>선택</TableCell>
                    <TableCell>소속사명</TableCell>
                    <TableCell>전화번호</TableCell>
                    <TableCell>주소</TableCell>
                    <TableCell>이메일</TableCell>
                    <TableCell>나이</TableCell>
                    <TableCell>자격구분</TableCell>
                    <TableCell>기사취득</TableCell>
                    <TableCell>전공</TableCell>
                    <TableCell>기타스킬</TableCell>
                    <TableCell>평가</TableCell>
                    <TableCell>블랙</TableCell>
                </TableRow>
                {talents.map((talent, index) => (
                        <TableRow key={index}>
                            <TableCell><input type='checkbox' /></TableCell>
                            <TableCell>{talent.id}</TableCell>
                            <TableCell>{talent.koreanName}</TableCell>
                            <TableCell></TableCell>
                            <TableCell>{talent.company}</TableCell>
                            <TableCell>{`${talent.phoneNumberFront}-${talent.phoneNumberMiddle}-${talent.phoneNumberBack}`}</TableCell>
                            <TableCell>{talent.address}</TableCell>
                            <TableCell>{talent.email}</TableCell>
                            <TableCell>{calculateAge(talent.birthDate)}</TableCell>
                            <TableCell>{talent.qualificationType}</TableCell>
                            <TableCell>{talent.qualificationCode}</TableCell>
                            <TableCell>{talent.major}</TableCell>
                            <TableCell>{talent.additionalSkills}</TableCell>
                            <TableCell>{talent.evaluationCode}</TableCell>
                            <TableCell>{talent.isBlacklisted}</TableCell>
                        </TableRow>
                    )
                )}
            </Table>
        </TalentChartWrapper>
    );
}

export default TalentChart;