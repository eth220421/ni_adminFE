import { axios } from '../utils/axios';
import { GetNameAndCompanyProps } from '../../../interfaces/GetNameAndCompanyProps';
import { TalentObj } from '../../../interfaces/TalentObj';

export async function getTalentByKoreanNameAndCompany({talName, company}: GetNameAndCompanyProps) {
    try {
        const response = await axios.get<TalentObj>(`/name/${talName}/company/${company}`);
        console.log(response.data);
    }
    catch (error) {
        console.log(error);
    }
}
