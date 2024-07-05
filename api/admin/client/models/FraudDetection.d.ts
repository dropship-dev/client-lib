import type { PrismaJson_TypeOfFraudService } from './PrismaJson_TypeOfFraudService';
/**
 * Model FraudDetection
 */
export type FraudDetection = {
    updatedAt: string;
    createdAt: string;
    isDeleted: boolean;
    /**
     * [TypeOfFraudService]
     */
    labels: PrismaJson_TypeOfFraudService | null;
    idempotencyKey: string | null;
    humanFraudDetect: boolean | null;
    systemFraudDetect: boolean;
    orderId: string;
    id: string;
};
