import { axios } from '../utils/axios';
import { TalentObj } from '../../../interfaces/TalentObj';
import { GetTalentProps } from '../../../interfaces/GetTalentProps';

export async function getTalent({ talName }: GetTalentProps): Promise<TalentObj[] | undefined> {
    try {
        const response = await axios.get<TalentObj[]>(`/name/${talName}`);
        console.log(response.data);
        return response.data
    }
    catch (error) {
        console.log(error);
    }
}