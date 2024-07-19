import { getTalentByCompany } from "../api/READ/getTalentByCompany";
import { TalentObj } from "../../interfaces/TalentObj";
import { GetTalentByCompanyProps } from "../../interfaces/GetTalentByCompanyProps";

export async function mapTalentByCompany({ comName }: GetTalentByCompanyProps): Promise<TalentObj[]> {
    const data: TalentObj[] | undefined = await getTalentByCompany({ comName });
    return data ? data : [];
}