import { TalentObj } from "./TalentObj";

export interface TalentChartProps {
    talents: TalentObj[];
    setCheckTalent: (talent: TalentObj) => void;
}