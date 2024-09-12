import type { CustomDomainStatus } from './CustomDomainStatus';
import type { DomainOrigin } from './DomainOrigin';
import type { PrismaJson_DomainContactInfo } from './PrismaJson_DomainContactInfo';
/**
 * Model CustomDomain
 */
export type CustomDomain = {
    updatedAt: string;
    createdAt: string;
    isPrimary: boolean | null;
    storeId: string;
    /**
     * [DomainContactInfo]
     */
    contactInfo: PrismaJson_DomainContactInfo | null;
    domainOrigin: DomainOrigin;
    autoRenew: boolean | null;
    expirationDate: string | null;
    status: CustomDomainStatus;
    target: string | null;
    domain: string;
    id: number;
};
