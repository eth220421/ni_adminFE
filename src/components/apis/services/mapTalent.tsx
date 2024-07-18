import { getTalent } from "../api/getTalent";
import { TalentObj } from "../../../interfaces/TalentObj";
import { GetTalentProps } from "../../../interfaces/GetTalentProps";

export async function mapTalent({ talName }: GetTalentProps): Promise<TalentObj[]> {
    const data: TalentObj[] | undefined = await getTalent({ talName });
    return data ? data : [];
}