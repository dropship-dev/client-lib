import type { PaymentType } from './PaymentType';
/**
 * Model Payment
 */
export type Payment = {
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number;
    UIVersion: number;
    isShowCompanyAddress: boolean | null;
    deleted: boolean;
    gatewayUrl: string | null;
    tokenExpiredAt: string | null;
    token: string | null;
    secretKey: string;
    publishableKey: string;
    companyAddress: string | null;
    companyName: string | null;
    name: string;
    email: string | null;
    type: PaymentType;
    userId: string;
    id: number;
};
