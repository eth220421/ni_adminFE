import { axios } from '../../utils/axios';
import { DeleteTalentProps } from '../../../interfaces/DeleteTalentProps';
import { TalentObj } from '../../../interfaces/TalentObj';

export async function deleteTalent({ talId }: DeleteTalentProps) {
    try {
        const response = await axios.delete<TalentObj>(`/${talId}`);
        console.log(response.data);
    }
    catch (error) {
        console.log("delete error : ", error);
        return error;
    }
}