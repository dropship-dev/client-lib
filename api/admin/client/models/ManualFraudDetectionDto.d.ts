import type { ActiveDetection } from './ActiveDetection';
export type ManualFraudDetectionDto = {
    isFraud: boolean | null;
    orderId?: string;
    storeId?: string;
    action: ActiveDetection;
};
