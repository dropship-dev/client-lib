import type { DirectionCursor } from './DirectionCursor';
import type { OrderTrackingEmailStatus } from './OrderTrackingEmailStatus';
import type { OrderTrackingRecoveredStatus } from './OrderTrackingRecoveredStatus';
export type ListAbandonmentOrdersDto = {
    direction: DirectionCursor;
    cursor: number;
    limit: number;
    emailStatus?: OrderTrackingEmailStatus;
    recoveryStatus?: OrderTrackingRecoveredStatus;
    id?: number;
    startDate?: string;
    endDate?: string;
};
