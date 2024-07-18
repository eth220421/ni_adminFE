import { axios } from '../utils/axios';
import { TalentObj } from '../../../interfaces/TalentObj';

export async function getAllTalent(): Promise<TalentObj[] | undefined> {
    try {
        const response = await axios.get<TalentObj[]>("");
        console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log(error);
    }
}