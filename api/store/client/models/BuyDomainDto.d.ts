import type { PaymentInfo } from './PaymentInfo';
import type { PrismaJson_DomainContactInfo } from './PrismaJson_DomainContactInfo';
export type BuyDomainDto = {
    domainName: string;
    contactInfo: PrismaJson_DomainContactInfo;
    purchasePrice: number;
    renewalPrice: number;
    purchaseType: string;
    autoRenew: boolean;
    paymentMethod: PaymentInfo;
};