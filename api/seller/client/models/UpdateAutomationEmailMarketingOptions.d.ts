import type { TimeEmailMarketingUnit } from './TimeEmailMarketingUnit';
import type { Week } from './Week';
export type UpdateAutomationEmailMarketingOptions = {
    subjectLine: string;
    timeDelay: string;
    unit: TimeEmailMarketingUnit;
    advance?: {
        specificDays: Array<Week>;
        specificTime?: string;
    };
    id: number;
};
