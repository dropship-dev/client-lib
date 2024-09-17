/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

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
  subscriptionId: string | null;
  renewalPrice: number;
  purchasePrice: number;
  domainOrigin: DomainOrigin;
  autoRenew: boolean | null;
  expirationDate: string | null;
  status: CustomDomainStatus;
  target: string | null;
  domain: string;
  id: number;
};

