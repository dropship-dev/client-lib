import type { OrderTrackingEmailStatusDto } from './OrderTrackingEmailStatusDto';
import type { OrderTrackingRecoveredStatusDto } from './OrderTrackingRecoveredStatusDto';
export type ListAbandonmentOrdersDto = {
    nextPageIndex?: number;
    pageSize: number;
    emailStatus?: Array<OrderTrackingEmailStatusDto>;
    recoveryStatus?: Array<OrderTrackingRecoveredStatusDto>;
    id?: string;
    startDate?: string;
    endDate?: string;
};
