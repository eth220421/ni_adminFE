import { mapAllTalent } from "../../apis/services/mapAllTalent";
import { TalentObj } from "../../interfaces/TalentObj";

export const fetchData = async (setTalents: React.Dispatch<React.SetStateAction<TalentObj[]>>) => {
    // GET All Talent
    const dataList: TalentObj[] = await mapAllTalent();
    setTalents(dataList);
}