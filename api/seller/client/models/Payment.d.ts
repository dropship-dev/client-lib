import type { PaymentType } from './PaymentType';
/**
 * Model Payment
 */
export type Payment = {
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    UIVersion: number;
    baseUrl: string | null;
    expiredAt: string | null;
    token: string | null;
    secretKey: string;
    publishableKey: string;
    name: string;
    email: string | null;
    type: PaymentType;
    userId: string;
    id: number;
};
