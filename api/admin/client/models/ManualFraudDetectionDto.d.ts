import type { ActiveDetection } from './ActiveDetection';
import type { FraudDetectionStatusType } from './FraudDetectionStatusType';
export type ManualFraudDetectionDto = {
    fraudDetectionStatus: FraudDetectionStatusType;
    orderId?: string;
    storeId?: string;
    action: ActiveDetection;
};
