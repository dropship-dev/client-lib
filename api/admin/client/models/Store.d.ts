import type { CustomDomainStatus } from './CustomDomainStatus';
import type { StoreStatus } from './StoreStatus';
/**
 * Model Store
 */
export type Store = {
    updatedAt: string;
    createdAt: string;
    currencyId: number;
    maxUsers: number;
    balance: number;
    shippingPolicy: string | null;
    termsOfService: string | null;
    privacyPolicy: string | null;
    refundPolicy: string | null;
    shippingFeeAdditional: number;
    shippingFee: number;
    timezone: number;
    customDomainStatus: CustomDomainStatus;
    customDomain: string | null;
    domain: string;
    pageName: string;
    status: StoreStatus;
    avatar: string | null;
    email: string;
    address: string;
    phone: string;
    name: string;
    id: string;
};
