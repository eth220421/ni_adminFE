import { TalentObj } from '../../../interfaces/TalentObj';
import { axios } from '../../utils/axios';

export async function postTalent(talent: TalentObj) {
    try {
        const response = await axios.post("", talent)
        return response.data;
    } catch (error) {
        console.log('인재 신규 등록 오류 : ', error);
    }
}