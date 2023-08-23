import type { PaymentType } from './PaymentType';
/**
 * Model Payment
 */
export type Payment = {
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    secretKey: string;
    publishableKey: string;
    name: string;
    email: string;
    type: PaymentType;
    userId: string;
    id: number;
};
