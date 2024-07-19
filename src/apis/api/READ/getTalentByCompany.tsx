import { axios } from '../../utils/axios';
import { TalentObj } from '../../../interfaces/TalentObj';
import { GetTalentByCompanyProps } from '../../../interfaces/GetTalentByCompanyProps';

export async function getTalentByCompany({ comName }: GetTalentByCompanyProps): Promise<TalentObj[] | undefined> {
    try {
        const response = await axios.get<TalentObj[]>(`/company/${comName}`);
        console.log(response.data);
        return response.data
    }
    catch (error) {
        console.log(error);
    }
}