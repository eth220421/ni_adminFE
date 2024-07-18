import { axios } from '../utils/axios';
import { GetCompanyProps } from '../../../interfaces/GetCompanyProps';
import { TalentObj } from '../../../interfaces/TalentObj';

export async function getTalentByCompany({company}: GetCompanyProps) {
    try {
        const response = await axios.get<TalentObj>(`/company/${company}`);
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
}
