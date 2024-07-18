import { axios } from '../utils/axios';
import { GetTalentProps } from '../../../interfaces/GetTalentProps';
import { TalentObj } from '../../../interfaces/TalentObj';

export async function getTalent({ talName }: GetTalentProps) {
    try {
        const response = await axios.get<TalentObj>(`/name/${talName}`);
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
}