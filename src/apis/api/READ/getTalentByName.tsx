import { axios } from '../../utils/axios';
import { TalentObj } from '../../../interfaces/TalentObj';
import { GetTalentByNameProps } from '../../../interfaces/GetTalentByNameProps';

export async function getTalentByName({ talName }: GetTalentByNameProps): Promise<TalentObj[] | undefined> {
    try {
        const response = await axios.get<TalentObj[]>(`/name/${talName}`);
        console.log(response.data);
        return response.data
    }
    catch (error) {
        console.log(error);
    }
}