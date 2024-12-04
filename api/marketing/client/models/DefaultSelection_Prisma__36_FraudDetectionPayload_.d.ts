import type { _36_Enums_FraudDetectionStatusType } from './_36_Enums_FraudDetectionStatusType';
import type { _36_Enums_FraudDetectionType } from './_36_Enums_FraudDetectionType';
import type { PrismaJson_TypeOfFraudService } from './PrismaJson_TypeOfFraudService';
export type DefaultSelection_Prisma__36_FraudDetectionPayload_ = {
    labels: PrismaJson_TypeOfFraudService;
    idempotencyKey: string;
    orderId: string;
    systemFraudDetect: _36_Enums_FraudDetectionStatusType;
    humanFraudDetect: _36_Enums_FraudDetectionStatusType;
    type: _36_Enums_FraudDetectionType;
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    storeId: string;
    id: string;
};
