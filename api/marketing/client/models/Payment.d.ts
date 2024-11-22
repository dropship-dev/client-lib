import type { EnvironmentType } from './EnvironmentType';
import type { PaymentType } from './PaymentType';
/**
 * Model Payment
 */
export type Payment = {
    updatedAt: string;
    createdAt: string;
    fulfillmentAgencyId: number | null;
    environment: EnvironmentType | null;
    UIVersion: number;
    deleted: boolean;
    partnerId: string | null;
    merchantId: string | null;
    gatewayUrl: string | null;
    tokenExpiredAt: string | null;
    token: string | null;
    secretKey: string;
    publishableKey: string;
    isPlatform: boolean;
    isShowCompanyAddress: boolean | null;
    companyAddress: string | null;
    companyPhone: string | null;
    companyName: string | null;
    name: string;
    email: string;
    type: PaymentType;
    userId: string;
    id: number;
};
