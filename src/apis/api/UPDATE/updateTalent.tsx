import { axios } from '../../utils/axios';
import { TalentObj } from '../../../interfaces/TalentObj';
import { UpdateTalentProps } from '../../../interfaces/UpdateTalentProps';

export async function updateTalent({ ourTalent, ourTalentId, navigate }: UpdateTalentProps) {
    try {
        const response = await axios.put<TalentObj>(`/${ourTalentId}`, ourTalent);
        console.log(response.data);
        // 수정 성공 시 메인 화면으로 이동
        navigate('/statistics');
    } catch (error) {
        console.log(error);
    }
}