import type { Period } from './Period';
import type { Tracking } from './Tracking';
export type GetCustomerTrackingResultDto = {
    period: Period;
    aggregateFirstTime: {
        growth: number | null;
        value: number;
    };
    aggregateReturning: {
        growth: number | null;
        value: number;
    };
    aggregateTotal: number;
    data: Array<Tracking>;
};
