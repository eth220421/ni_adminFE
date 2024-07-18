import { axios } from '../utils/axios';
import { GetTalentProps } from '../../../interfaces/GetTalentProps';

export async function getTalent({ talName }: GetTalentProps) {
    const response = await axios.get(`/${talName}`);
    return response.data;
}