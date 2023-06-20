import type { CustomDomainStatus } from './CustomDomainStatus';
import type { StoreStatus } from './StoreStatus';
/**
 * Model Store
 */
export type Store = {
    updatedAt: string;
    createdAt: string;
    paymentId: number | null;
    currencyId: number;
    maxUsers: number;
    balance: number;
    shippingPolicy: string | null;
    termsOfService: string | null;
    privacyPolicy: string | null;
    refundPolicy: string | null;
    status: StoreStatus;
    timezone: number;
    customDomainStatus: CustomDomainStatus;
    customDomain: string | null;
    domain: string;
    email: string;
    address: string;
    phone: string;
    name: string;
    id: number;
};
