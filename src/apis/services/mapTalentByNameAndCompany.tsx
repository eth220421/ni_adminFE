import { getTalentByNameAndCompany } from "../api/READ/getTalentByNameAndCompany";
import { TalentObj } from "../../interfaces/TalentObj";
import { GetTalentByNameAndCompanyProps } from "../../interfaces/GetTalentByNameAndCompany";

export async function mapTalentByNameAndCompany({ talName, comName }: GetTalentByNameAndCompanyProps): Promise<TalentObj[]> {
    const data: TalentObj[] | undefined = await getTalentByNameAndCompany({ talName, comName });
    return data ? data : [];
}