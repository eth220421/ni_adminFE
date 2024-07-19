import { TalentObj } from "./TalentObj";

export interface ControllerProps {
    setTalents: (talents: TalentObj[]) => void;
    checkTalent: TalentObj | null;
}