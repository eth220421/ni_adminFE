import { axios } from '../../utils/axios';
import { DeleteTalentProps } from '../../../../interfaces/DeleteTalentProps';
import { TalentObj } from '../../../../interfaces/TalentObj';

export async function deleteTalent({ talName }: DeleteTalentProps) {
    try {
        const response = await axios.delete<TalentObj>(`/${talName}`);
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
}