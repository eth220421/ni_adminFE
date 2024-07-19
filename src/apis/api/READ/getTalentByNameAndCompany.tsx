import { axios } from '../../utils/axios';
import { TalentObj } from '../../../interfaces/TalentObj';
import { GetTalentByNameAndCompanyProps } from '../../../interfaces/GetTalentByNameAndCompany';

export async function getTalentByNameAndCompany({ talName, comName }: GetTalentByNameAndCompanyProps): Promise<TalentObj[] | undefined> {
    try {
        const response = await axios.get<TalentObj[]>(`/name/${talName}/company/${comName}`);
        console.log(response.data);
        return response.data
    }
    catch (error) {
        console.log(error);
    }
}