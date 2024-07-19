import { axios } from '../../utils/axios';
import { CreateTalentProps } from '../../../../interfaces/CreateTalentProps';
import { TalentObj } from '../../../../interfaces/TalentObj';

export async function createTalent({ newTalent, navigate }: CreateTalentProps) {
    try {
        const response = await axios.post<TalentObj>('', newTalent);
        console.log(response.data);
        // 신규 등록 성공 시 메인 화면으로 이동
        navigate('/statistics');
    } catch (error) {
        console.log(error);
    }
}