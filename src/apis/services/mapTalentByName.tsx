import { getTalentByName } from "../api/READ/getTalentByName";
import { TalentObj } from "../../interfaces/TalentObj";
import { GetTalentByNameProps } from "../../interfaces/GetTalentByNameProps";

export async function mapTalentByName({ talName }: GetTalentByNameProps): Promise<TalentObj[]> {
    const data: TalentObj[] | undefined = await getTalentByName({ talName });
    return data ? data : [];
}