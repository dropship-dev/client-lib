import type { PaymentType } from './PaymentType';
/**
 * Model Payment
 */
export type Payment = {
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number | null;
    secretKey: string;
    publishableKey: string;
    name: string;
    email: string | null;
    type: PaymentType;
    userId: string;
    id: number;
};