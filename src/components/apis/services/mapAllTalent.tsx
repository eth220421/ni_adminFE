import { getAllTalent } from "../api/getAllTalent";
import { TalentObj } from "../../../interfaces/TalentObj";

export async function mapAllTalent(): Promise<TalentObj[]> {
    const dataList: TalentObj[] | undefined = await getAllTalent();
    return dataList ? dataList : [];
}