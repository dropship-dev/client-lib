/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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

