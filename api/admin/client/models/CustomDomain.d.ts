import type { CustomDomainStatus } from './CustomDomainStatus';
/**
 * Model CustomDomain
 */
export type CustomDomain = {
    updatedAt: string;
    createdAt: string;
    isPrimary: boolean | null;
    storeId: string;
    status: CustomDomainStatus;
    target: string | null;
    domain: string;
    id: number;
};
