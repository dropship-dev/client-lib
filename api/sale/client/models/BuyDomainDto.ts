/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PrismaJson_DomainContactInfo } from './PrismaJson_DomainContactInfo';
import type { StripeCardPaymentInfo } from './StripeCardPaymentInfo';
export type BuyDomainDto = {
  domainName: string;
  contactInfo: PrismaJson_DomainContactInfo;
  purchasePrice: number;
  renewalPrice: number;
  purchaseType: string;
  autoRenew: boolean;
  paymentMethod: StripeCardPaymentInfo;
};

