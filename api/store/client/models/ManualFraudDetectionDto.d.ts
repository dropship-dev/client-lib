import type { _36_Enums_FraudDetectionStatusType } from './_36_Enums_FraudDetectionStatusType';
import type { ActiveDetection } from './ActiveDetection';
export type ManualFraudDetectionDto = {
    fraudDetectionStatus: _36_Enums_FraudDetectionStatusType;
    orderId?: string;
    storeId: string;
    action: ActiveDetection;
};
