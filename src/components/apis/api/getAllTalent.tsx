import { axios } from '../utils/axios';
import { TalentObj } from '../../../interfaces/TalentObj';

export async function getAllTalent() {
    const response = await axios.get<TalentObj>("");
    return response.data;
}